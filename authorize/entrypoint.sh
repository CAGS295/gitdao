#!/bin/sh -l

set -ueo >> /dev/null

#echo "time=$time" >> $GITHUB_OUTPUT

node ../aragonsdkscripts/approve.js $1 $2