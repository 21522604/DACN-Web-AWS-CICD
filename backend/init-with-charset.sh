#!/bin/bash
set -e

echo "Setting default character set to utf8mb4"
mysql --default-character-set=utf8mb4 -u root -p123456 clothes-web-shop < /docker-entrypoint-initdb.d/init.sql
