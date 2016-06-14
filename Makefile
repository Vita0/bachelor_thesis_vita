
all:
	make pdf
	make bib
	make nomenclature
	make pdf

pdf:
	pdflatex thesis.tex

bib:
	bibtex thesis

nomenclature:
	makeindex thesis.nlo -s nomencl.ist -o thesis.nls

clean:
	rm *.pdf

