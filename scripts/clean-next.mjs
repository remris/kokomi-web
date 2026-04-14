import { spawnSync } from 'node:child_process'
import { rimraf } from 'rimraf'

const root = process.cwd().replace(/[/\\]+$/, '')

/** Beendet unter Windows Node-Prozesse, die Next für genau dieses Projekt ausführen (.next/trace bleibt sonst gesperrt). */
function stopNextForThisProjectWindows() {
  if (process.platform !== 'win32') return
  const script = [
    '$r = $env:CLEAN_NEXT_ROOT;',
    'if (-not $r) { exit 0 };',
    'Get-CimInstance Win32_Process -Filter "name = \'node.exe\'" | Where-Object {',
    '  $_.CommandLine -and ($_.CommandLine -like ("*" + $r + "*")) -and ($_.CommandLine -match "next")',
    '} | ForEach-Object {',
    '  Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue',
    '}',
  ].join(' ')
  spawnSync('powershell.exe', ['-NoProfile', '-Command', script], {
    stdio: 'inherit',
    env: { ...process.env, CLEAN_NEXT_ROOT: root },
    windowsHide: true,
  })
}

stopNextForThisProjectWindows()

await rimraf('.next', {
  maxRetries: 15,
  retryDelay: 150,
})
