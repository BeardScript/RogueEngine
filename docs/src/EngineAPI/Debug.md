### Debug

The **Debug** controller gives us some handy methods to log stuff in the editor console. This does not mean that the editor console is being manipulated from this class, on the contrary, the editor console is using this class to display the logs. For the time being, it can only handle strings. When running your built projects you'll be able to see the logs in the browser's console.

All of its members are **static**, so you access them directly through the class, like `Debug.log(...)`.

## Properties

#### .maxLogs

```typescript
static maxLogs: number = 50;
```

The maximum number of log entries kept in the log store. When the limit is reached, the oldest entries are dropped to make room for the new ones.

#### .logs

```typescript
static logs: Log[];
```

The array of captured log entries. It gets capped by [.maxLogs](#maxlogs).

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

### Types

#### Log

The **Log** class represents a single log entry. It has a **message** string with the log text, and a **type** property that tells you whether it's a plain `"Log"`, an `"Error"` or a `"Warning"`.

```typescript
class Log {
  message: string;
  readonly type: 'Log' | 'Error' | 'Warning';
}
```

**Error** and **Warning** extend **Log** and lock the type to `"Error"` and `"Warning"` respectively. They are the classes used internally by [.logError](#logerror) and [.logWarning](#logwarning). You can import them from `rogue-engine`, but be aware that `Error` will shadow the global `Error` object in your file if you do.