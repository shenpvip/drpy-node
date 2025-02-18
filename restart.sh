#!/bin/sh

# 设置路径
SCRIPT_PATH="/usr/home/ty1995/domains/drpys.900730.xyz/public_html/drpy-node/index.js"
WORK_DIR="/usr/home/ty1995/domains/drpys.900730.xyz/public_html/drpy-node"
LOG_FILE="$WORK_DIR/drpy-node.log"
RESTART_LOG="$WORK_DIR/restart_log.txt"

# 检查脚本是否在运行
if ! pgrep -f "node $SCRIPT_PATH" > /dev/null
then
    # 如果脚本没有运行，则重新启动它
    cd "$WORK_DIR"
    nohup node "$SCRIPT_PATH" > "$LOG_FILE" 2>&1 &
    echo "Restarted drpy-node at $(date)" >> "$RESTART_LOG"
fi