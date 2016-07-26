CC = pdflatex
PORT = 8080
ADDRESS = localhost:8080

.PHONY: release

release:
	grunt build
	git add .
	git cm -am "Rebuilding"
	bumpversion minor --commit
