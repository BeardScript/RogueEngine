### Debug

The **Debug** controller gives us some handy methods to log stuff in the editor console. This does not mean that the editor console is being manipulated from this class, on the contrary, the editor console is using this class to display the logs. For the time being, it can only handle strings. When running your built projects you'll be able to see the logs in the browser's console.

## Methods

#### .log

```typescript
log(message: string): void
```

Logs a simple message that will be shown white in the console.

### .logError

```typescript
logError(message: string): void
```

Logs an error message that will be shown red in the console.

### .logWarning

```typescript
logWarning(message: string): void
```

Logs a warning message that will be shown yellow in the console.

### .clear

```typescript
clear(): void
```

Clears all logs.

### .onAddLog

```typescript
onAddLog(callback: (log: Log) => void): {stop: () => void}
```

A handy hook to execute a callback whenever a log is added. Remember to stop listening, by using the **stop()** function in the object returned by this method.

### .onClearLogs

```typescript
onClearLogs(callback: () => void): {stop: () => void}
```

A handy hook to execute a callback whenever the clear function is called. Remember to stop listening, by using the **stop()** function in the object returned by this method.