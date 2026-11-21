#!/usr/bin/env node
// Zero-dependency American Mahjong group & discarder payout rule checker
export function validateAmericanMahjongGroup({ groupSize = 3, jokersUsed = 1, isSingleOrPairToken = false } = {}) {
  if (isSingleOrPairToken || groupSize < 3) {
    return {
      legal: jokersUsed === 0,
      reason: jokersUsed === 0
        ? 'Natural single/pair requires 0 Jokers.'
        : 'Illegal: Jokers can NEVER be used in singles, pairs (e.g., FF or 22), or compound NEWS/2026 tokens.'
    };
  }
  return {
    legal: jokersUsed <= groupSize,
    reason: `Legal ${groupSize}-tile group (${groupSize === 3 ? 'Pung' : groupSize === 4 ? 'Kong' : groupSize === 5 ? 'Quint' : 'Sextet'}): Jokers allowed.`
  };
}

export function calculateTablePayout({ basePoints = 25, selfDrawn = false, jokerless = false, validBonus = true } = {}) {
  const mult = jokerless && validBonus ? 2 : 1;
  const eff = basePoints * mult;
  if (selfDrawn) {
    return { winnerReceives: eff * 2 * 3, eachOpponentPays: eff * 2, note: 'Self-pick from wall: all 3 opponents pay 2x.' };
  }
  return {
    winnerReceives: eff * 2 + eff * 2,
    discarderPays: eff * 2,
    otherTwoPayEach: eff,
    note: 'Called discard: discarder pays 2x; other two players pay 1x each.'
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify({
    pairWithJoker: validateAmericanMahjongGroup({ groupSize: 2, jokersUsed: 1 }),
    kongWithTwoJokers: validateAmericanMahjongGroup({ groupSize: 4, jokersUsed: 2 }),
    called25ptJokerless: calculateTablePayout({ basePoints: 25, selfDrawn: false, jokerless: true })
  }, null, 2));
}
