import roleHarvester from './src/role.harvester';

export function loop(): void {
  for(const name in Game.creeps) {
    const creep = Game.creeps[name];
    roleHarvester.run(creep);
  }
}
