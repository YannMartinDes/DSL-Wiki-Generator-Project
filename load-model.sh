#!/bin/bash
BASEDIR=$(dirname "$0")
rm -rf $BASEDIR/wiki-react/src/model >/dev/null
cp -r $BASEDIR/user-repository/src/model $BASEDIR/wiki-react/src/