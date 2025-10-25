# 🎲 rng-helper

Lightweight random utility library for game developers.

## 🧩 Usage

```javascript
import { chance, pick, pickRange } from "rng-helper";

if (chance(25)) console.log("Success");
console.log(pick(["A", "B", "C", "D"]));
console.log(pickRange(1,10));
```

## ⚙️ Functions

- `chance(percent)`
- `pick(array)`
- `pickRange(min,max)`