# Grammarchecker testing and development

We have 3 approaches

1. Grammarchecker development (building the program)
2. Working with precision (are the alarms correct)?
3. Testing precision and recall (do we find all the errors)?

__NB!__ The grammar checker also contains the regular speller, and it is vital to ensure that the speller performance in the grammaaar checker is not worse than the stand-alone speller. That is:

- test the grammar checker with the same material as the speller
- ensure that at least all speller errors are found
- check that the suggestions are at least as good as the stand-alone speller

One can add speller-specific rules to improve suggestion quality, if so desired.

## Grammarchecker development
- Find errors of the relevant type (= errors that we write rules for)
- Put the **sentences** containing these errors in yaml files in grammarchecker/tests
- Run the yaml test and revise the grammachecker.cg3 rules until all yaml sentences pass

## Testing precision (are the alarms correct)?
- Find a **large** corpus (preferably written by the gramchecker's target group and run it through the grammarchecker
- Look for alarms. 
	- If the goal is to test precision, calculate how many of the alarms are correct 
	- If the goal is to improve the gramchecker, put the sentences containing false (and why not correct ones!) in the yaml files and revise the grammachecker.cg3 rules until all yaml sentences pass

## Testing precision and recall (do we find all the errors)?
- Select texts written by the gramchecker target group
- Mark **the whole texts** for errors according to [these principles](../spelling/testdoc/error-markup.html)
- Run the texts through the [testing procedure](preparing-annotated-text.md)

# Warning!!

Whole texts annotated for testing **can not** be used for improving the program. If so, you cannot use them for testing.