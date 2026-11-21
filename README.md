# 152-Tile American Mahjong Quick Reference & Rule Validator

Structured JSON tile dataset (`tiles-152.json`), zero-dependency Joker & payout validator (`check-joker-rule.mjs`), and crisp table rules for **152-tile American Mahjong**.

> **Interactive Practice & Table Referees (Free, No Login):** Practice Charleston passes, card reading, and calling windows step-by-step on **[Mahjong First (mahjongfirst.com)](https://mahjongfirst.com/)**.

---

## 1. The 152-Tile Set & Suit-Dragon Pairing

| Tile Group | Count | Suit / Color Rule | Interactive Guide |
| :--- | :--- | :--- | :--- |
| **Craks (1–9 × 4)** | `36` | Paired with **Red Dragon** (`R`) · Red ink on card | [Dragon & Soap Rules](https://mahjongfirst.com/american-mahjong-dragon-rules.html) |
| **Bams (1–9 × 4)** | `36` | Paired with **Green Dragon** (`G`) · `1-Bam` is the Bird | [How to Read the Card](https://mahjongfirst.com/how-to-read-american-mahjong-card.html) |
| **Dots (1–9 × 4)** | `36` | Paired with **White Dragon / Soap** (`0` in Year hands) | [152-Tile Breakdown](https://mahjongfirst.com/how-many-tiles-in-american-mahjong.html) |
| **Winds (`N E W S` × 4)** | `16` | Singles inside `NEWS` cannot use Jokers or be called until Mah Jongg | [Flower & Wind Rules](https://mahjongfirst.com/american-mahjong-flower-and-wind-rules.html) |
| **Flowers (8)** | `8` | Interchangeable; `FF` is a pair (no Jokers, cannot call for exposure) | [Setup & 19-Stack Walls](https://mahjongfirst.com/american-mahjong-setup-and-wall-rules.html) |
| **Jokers (8)** | `8` | Allowed **only** in groups of 3+ identical tiles (`Pung`, `Kong`, `Quint`, `Sextet`); uncallable when discarded | [Joker Rules & Swaps](https://mahjongfirst.com/joker-rules.html) |

---

## 2. Five Golden Table Rules Beginners Mix Up

1. **The Charleston (`Right → Across → Left`, then optional `Left → Across → Right`):** You may blind-pass up to 3 tiles only on the **first Left** and **final Right**; **Jokers may never be passed** in the Charleston or Courtesy Pass ([Charleston Simulator](https://mahjongfirst.com/charleston-rules.html)).
2. **Calling Discards (`X` vs. `C`):** You may only call the most recent discard to expose a group of **3+ tiles** on an **Exposed (`X`)** hand—**unless** that single tile completes your 14th-tile **Mah Jongg** (which is legal even for a pair or a **Concealed (`C`)** hand! See [Calling Rules](https://mahjongfirst.com/calling-rules.html) & [Concealed vs. Exposed (`C` vs. `X`)](https://mahjongfirst.com/american-mahjong-concealed-vs-exposed-hands.html)).
3. **Official Payout Math:** When a discard is called for Mah Jongg, the **discarder pays 2×** hand value and the other two players pay **1×**; on a wall self-pick, **all three opponents pay 2×** ([Scoring Calculator](https://mahjongfirst.com/american-mahjong-scoring-rules.html)).
4. **Dead Hand Referee:** Exposing on a `C` hand, exposing the wrong tile count, or running out of survivable naturals renders a hand dead ([Dead Hand Rules](https://mahjongfirst.com/american-mahjong-dead-hand-rules.html)).
5. **Defensive Safe Discards:** Late in the wall, discarded **Jokers** are 100% uncallable (even for Mah Jongg), and 4th natural copies cannot complete an opponent's pair ([Defense & Safe Discards](https://mahjongfirst.com/american-mahjong-defense-and-safe-discards.html) · [Terms & Slang Glossary](https://mahjongfirst.com/american-mahjong-terms-and-slang-glossary.html) · [Printable 6-Sheet Table Reference Pack](https://mahjongfirst.com/printable-pack.html)).

---

## 3. Quick CLI Usage

```bash
node ./check-joker-rule.mjs
```

## License

MIT
