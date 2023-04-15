@ECHO OFF
IF "%1"=="--watch" (
    SET WATCH=1
)

IF DEFINED WATCH (
    SET entry_file_path=%2
) ELSE (
    SET entry_file_path=%1
)

IF %entry_file_path:src\entry=%==%entry_file_path% (
    SET entry_file_path=%~dp0/src/entry/%entry_file_path%.ts
)

SET cmd=rollup --config rollup.config.ts --environment file_path:%entry_file_path% --configPlugin @rollup/plugin-typescript
IF DEFINED WATCH (
    SET cmd=%cmd% --watch
)

%cmd%
