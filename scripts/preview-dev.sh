#!/usr/bin/env bash
set -euo pipefail

SESSION="portfolio-preview"
DEFAULT_HOST="0.0.0.0"
DEFAULT_PORT="3001"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

usage() {
  cat <<'EOF'
Usage: scripts/preview-dev.sh <start|stop|status|restart> [port] [host]

Examples:
  scripts/preview-dev.sh start
  scripts/preview-dev.sh start 3002
  scripts/preview-dev.sh restart 3001 0.0.0.0
  scripts/preview-dev.sh status
  scripts/preview-dev.sh stop
EOF
}

require_cmd() {
  local cmd="$1"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Missing required command: $cmd"
    exit 1
  fi
}

pick_ips() {
  local ip
  local lan_ip=""
  local ts_ip=""
  for ip in $(hostname -I); do
    if [[ "$ip" == *:* ]]; then
      continue
    fi
    if [[ -z "$lan_ip" && ( "$ip" == 192.* || "$ip" == 10.* || "$ip" == 172.1[6-9].* || "$ip" == 172.2[0-9].* || "$ip" == 172.3[0-1].* ) ]]; then
      lan_ip="$ip"
    fi
    if [[ -z "$ts_ip" && "$ip" == 100.* ]]; then
      ts_ip="$ip"
    fi
  done

  echo "$lan_ip|$ts_ip"
}

print_urls() {
  local port="$1"
  local ips
  local lan_ip
  local ts_ip
  ips="$(pick_ips)"
  lan_ip="${ips%%|*}"
  ts_ip="${ips##*|}"

  echo "Preview URLs:"
  if [[ -n "$lan_ip" ]]; then
    echo "  LAN: http://$lan_ip:$port/"
  else
    echo "  LAN: (not detected)"
  fi
  if [[ -n "$ts_ip" ]]; then
    echo "  Tailscale: http://$ts_ip:$port/"
  else
    echo "  Tailscale: (not detected)"
  fi
}

start_server() {
  local port="$1"
  local host="$2"

  if tmux has-session -t "$SESSION" 2>/dev/null; then
    echo "Session '$SESSION' is already running."
    print_urls "$port"
    return 0
  fi

  tmux new-session -d -s "$SESSION" "cd \"$ROOT_DIR\" && npm run dev -- --hostname \"$host\" --port \"$port\""
  sleep 1
  print_urls "$port"
}

stop_server() {
  if tmux has-session -t "$SESSION" 2>/dev/null; then
    tmux kill-session -t "$SESSION"
    echo "Stopped session '$SESSION'."
  else
    echo "Session '$SESSION' is not running."
  fi
}

status_server() {
  if tmux has-session -t "$SESSION" 2>/dev/null; then
    echo "Session '$SESSION' is running."
  else
    echo "Session '$SESSION' is not running."
  fi
}

main() {
  require_cmd tmux
  require_cmd npm

  local action="${1:-}"
  local port="${2:-$DEFAULT_PORT}"
  local host="${3:-$DEFAULT_HOST}"

  case "$action" in
    start)
      start_server "$port" "$host"
      ;;
    stop)
      stop_server
      ;;
    status)
      status_server
      ;;
    restart)
      stop_server
      start_server "$port" "$host"
      ;;
    *)
      usage
      exit 1
      ;;
  esac
}

main "$@"
