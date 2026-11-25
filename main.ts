const line = 'I broke production. I also wrote the postmortem. Growth.';
const usage = 'Usage: node main.ts [--shout] [--help]';

const args = process.argv.slice(2);

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function main(): void {
  if (hasFlag('--help')) {
    process.stderr.write(`${usage}\n`);
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
