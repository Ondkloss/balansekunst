import { balance, listAccounts } from './lib/balansekunst';
import { ArgumentParser } from 'argparse';
import pckg from './package.json';

const parser = new ArgumentParser({
    version: pckg.version,
    description: 'Balansekunst'
});

const group = parser.addMutuallyExclusiveGroup({ required: true });

group.addArgument(['-a', '--accounts'], {
    help: 'List opp kontoer.',
    action: 'storeTrue'
});

group.addArgument(['-b', '--balance'], {
    help: 'Utfør balansekunst.',
    action: 'storeTrue'
});

const args = parser.parseArgs();

if (args.balance) {
    balance();
}
else if (args.accounts) {
    listAccounts();
}
else {
    console.log('Hyggelig at du stakk innom!');
}
