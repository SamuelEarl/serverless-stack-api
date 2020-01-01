To test your API endpoints, run the following command in a terminal from your project root:

```
serverless invoke local --function <functionName> --path <path/to/event/test/data/JSON/file>
```

For example:
```
serverless invoke local --function create --path event-test-data/notes/create-event.json
```
