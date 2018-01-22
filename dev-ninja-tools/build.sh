#!/usr/bin/env bash

# Settings
TITLE="Dev Ninja Tools"
PARSER=gfm

# Delete build files
rm handout.html

# Build handout
pandoc \
 handout.md \
 --from $PARSER \
 --to html \
 --output handout.html \
 --metadata title="$TITLE" \
 --standalone \
 --toc \
 --template="$HOME\.pandoc\templates\github.html5"
