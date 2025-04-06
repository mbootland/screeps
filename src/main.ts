import roleHarvester from './role.harvester';

export function loop(): void {
  for(const name in Game.creeps) {
    const creep = Game.creeps[name];
    roleHarvester.run(creep);
  }
}
