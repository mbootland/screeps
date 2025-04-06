"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = loop;
const role_harvester_1 = require("./role.harvester");
function loop() {
    for (const name in Game.creeps) {
        const creep = Game.creeps[name];
        role_harvester_1.roleHarvester.run(creep);
    }
}
//# sourceMappingURL=main.js.map