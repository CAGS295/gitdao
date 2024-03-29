#!/bin/sh -l

set -ueo >> /dev/null

#echo "time=$time" >> $GITHUB_OUTPUT

node /aragonsdkscripts/dist/approve.js $1 $2