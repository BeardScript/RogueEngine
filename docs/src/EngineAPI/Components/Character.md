### Character

A built in component that adds health, shield, armor and stamina to an object, with regeneration and a team system. This is the thing your [Weapons](/EngineAPI/Components/Weapon) shoot at.

Shield absorbs damage first, then armor applies its curve, and what's left comes off health. Stats recover after their regen wait if the character doesn't take damage.

### Statics

- `armorConstant = 100`: shapes the armor mitigation curve. Mitigation is `armor / (armor + armorConstant)`.
- `friendlyFire: "None" | "Friendly" | "All" = "None"`: the global friendly fire setting.
- `team`: the team constants, `Team1` through `Team6`.
- `setFriendly(...teams)` / `setHostile(...teams)`: mark teams as friends or foes.
- `areFriendly(teamA, teamB)` / `areHostile(teamA, teamB)`: query team relations.
- `getFriendlies(team)`: the friends of a team.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| team | select | `Team1` | The team this character belongs to. |
| hp | number | `100` | Maximum health. |
| shield | number | `100` | Maximum shield. |
| armor | number | `10` | Armor value for the mitigation curve. |
| stamina | number | `100` | Maximum stamina. |
| hpRegen | number | `20` | Health recovered per second after the wait. |
| shieldRegen | number | `20` | Shield recovered per second after the wait. |
| staminaRegen | number | `20` | Stamina recovered per second after the wait. |
| hpRegenWait | number | `1.5` | Seconds without damage before health regen kicks in. |
| shieldRegenWait | number | `1.5` | Seconds without damage before shield regen kicks in. |
| staminaRegenWait | number | `1` | Seconds without stamina use before it recovers. |
| curHP | number | `100` | Current health. |
| curShield | number | `100` | Current shield. |
| curStamina | number | `100` | Current stamina. |

### Methods

- `applyDamage(damage, attackerTeam?)`: the damage sink. Applies shield, armor mitigation, then health, and respects friendly fire when an attacker team is given.
- `heal(amount)` / `recoverShield(amount)` / `recoverStamina(amount)`: clamped recovery helpers.
- `spendStamina(amount)`: drains stamina and resets its regen delay.
- `isFriendly(target)` / `isHostile(target)`: instance helpers against another team or character.
