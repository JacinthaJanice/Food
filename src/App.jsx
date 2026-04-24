import { useState } from "react";

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

const meals = {
  Monday: {
    breakfast: { name: "Chia Seed Pudding with Milk", cal: 220, desc: "3 tbsp chia seeds soaked overnight in 1 cup milk. Top with a slice of watermelon.", macros: "P: 9g  C: 28g  F: 9g" },
    lunch: { name: "Grilled Fish + Veggie Bowl", cal: 380, desc: "150g grilled fish with olive oil & garlic. Side of roasted pumpkin (with drumstick pieces) + sliced tomato & cucumber salad with vinegar dressing.", macros: "P: 38g  C: 22g  F: 12g" },
    snack: { name: "Makhana + Almond Spread Toast", cal: 200, desc: "1 cup roasted makhana + 1 slice bread with almond spread.", macros: "P: 7g  C: 24g  F: 8g" },
    dinner: { name: "Chicken & Veggie Stir-fry", cal: 370, desc: "150g chicken breast stir-fried with bell pepper, onion, garlic in olive oil. Served with 1 small boiled potato.", macros: "P: 35g  C: 25g  F: 10g" },
  },
  Tuesday: {
    breakfast: { name: "Curd + Watermelon Bowl", cal: 190, desc: "1 cup curd with 1 cup diced watermelon. Sprinkle chia seeds on top.", macros: "P: 10g  C: 25g  F: 4g" },
    lunch: { name: "Fish & Tomato Curry", cal: 390, desc: "150g fish simmered with tomato, onion, garlic, drumstick & a splash of vinegar. Serve with 1 small boiled potato.", macros: "P: 36g  C: 28g  F: 10g" },
    snack: { name: "Cucumber + Cheese Spread Toast", cal: 190, desc: "1 slice bread with cheese spread, sliced cucumber & a drizzle of ketchup.", macros: "P: 7g  C: 22g  F: 7g" },
    dinner: { name: "Chicken Pasta", cal: 400, desc: "1 cup cooked pasta with 100g chicken, bell pepper, tomato, garlic & olive oil. Light ketchup base.", macros: "P: 32g  C: 40g  F: 9g" },
  },
  Wednesday: {
    breakfast: { name: "Milk + Bread with Sunflower Spread", cal: 260, desc: "1 glass warm milk + 2 slices bread with sunflower seed spread.", macros: "P: 12g  C: 34g  F: 9g" },
    lunch: { name: "Grilled Chicken Salad", cal: 350, desc: "150g grilled chicken with cucumber, tomato, bell pepper, onion, vinegar & olive oil dressing.", macros: "P: 36g  C: 14g  F: 10g" },
    snack: { name: "Makhana + Curd Dip", cal: 180, desc: "1 cup roasted makhana served with ½ cup curd mixed with garlic as a dip.", macros: "P: 9g  C: 22g  F: 4g" },
    dinner: { name: "Fish & Bell Pepper Sauté", cal: 380, desc: "150g fish sautéed with bell pepper, onion, garlic & olive oil. Side of roasted potato slices.", macros: "P: 36g  C: 26g  F: 10g" },
  },
  Thursday: {
    breakfast: { name: "Chia Seed + Curd Parfait", cal: 210, desc: "½ cup curd layered with 2 tbsp chia seeds + watermelon cubes.", macros: "P: 10g  C: 24g  F: 6g" },
    lunch: { name: "Chicken & Drumstick Soup", cal: 370, desc: "100g chicken with drumstick, tomato, onion, garlic in light broth. Serve with 1 slice bread.", macros: "P: 33g  C: 22g  F: 9g" },
    snack: { name: "Pumpkin Seed Spread Toast + Cucumber", cal: 195, desc: "1 slice bread with pumpkin seed spread + sliced cucumber on the side.", macros: "P: 7g  C: 22g  F: 8g" },
    dinner: { name: "Pasta Primavera", cal: 390, desc: "1 cup pasta tossed with bell pepper, tomato, onion, garlic, olive oil. Top with cheese spread.", macros: "P: 14g  C: 52g  F: 11g" },
  },
  Friday: {
    breakfast: { name: "Milk & Almond Spread Toast", cal: 250, desc: "1 glass milk + 1 slice bread with almond spread + sliced banana or watermelon.", macros: "P: 13g  C: 30g  F: 9g" },
    lunch: { name: "Fish Tomato Stew + Potato", cal: 385, desc: "150g fish with tomato, garlic, vinegar slow-cooked. 1 small boiled potato on the side.", macros: "P: 37g  C: 26g  F: 10g" },
    snack: { name: "Makhana Trail Mix", cal: 185, desc: "1 cup roasted makhana. Pair with 1 small watermelon slice.", macros: "P: 6g  C: 26g  F: 4g" },
    dinner: { name: "Chicken & Veggie Loaded Toast", cal: 360, desc: "2 slices bread with cheese spread, shredded cooked chicken, cucumber, tomato & a drizzle of ketchup.", macros: "P: 32g  C: 30g  F: 10g" },
  },
  Saturday: {
    breakfast: { name: "Chia Milk Smoothie Bowl", cal: 220, desc: "Blend 1 cup milk with watermelon. Pour over 2 tbsp soaked chia seeds. Let sit 10 min.", macros: "P: 10g  C: 30g  F: 6g" },
    lunch: { name: "Grilled Fish Wrap", cal: 380, desc: "150g grilled fish with vinegar + garlic marinade. Serve in 1–2 slices bread with cucumber, tomato & ketchup.", macros: "P: 36g  C: 30g  F: 10g" },
    snack: { name: "Curd + Sunflower Spread Dip & Veggies", cal: 190, desc: "½ cup curd mixed with sunflower spread, served with cucumber & bell pepper sticks.", macros: "P: 9g  C: 14g  F: 9g" },
    dinner: { name: "Simple Chicken Maggi", cal: 390, desc: "1 pack Maggi with 100g shredded chicken, onion, tomato & bell pepper. Minimal oil.", macros: "P: 22g  C: 48g  F: 10g" },
  },
  Sunday: {
    breakfast: { name: "Curd Pancake Toast", cal: 230, desc: "2 slices bread spread with curd + pumpkin seed spread. Top with watermelon slices.", macros: "P: 10g  C: 32g  F: 7g" },
    lunch: { name: "Full Protein Bowl", cal: 400, desc: "100g chicken + 100g fish cooked with garlic, onion, tomato, drumstick & olive oil. Serve with 1 small potato.", macros: "P: 48g  C: 22g  F: 12g" },
    snack: { name: "Almond Spread + Makhana", cal: 200, desc: "½ cup makhana + 1 slice bread with almond spread.", macros: "P: 7g  C: 26g  F: 9g" },
    dinner: { name: "Veggie Pasta Bake", cal: 360, desc: "1 cup pasta with roasted bell pepper, tomato, garlic, olive oil & melted cheese spread on top.", macros: "P: 14g  C: 50g  F: 10g" },
  },
};

const mealColors = {
  breakfast: { bg: "bg-amber-50", border: "border-amber-300", badge: "bg-amber-400", label: "🌅 Breakfast" },
  lunch: { bg: "bg-green-50", border: "border-green-300", badge: "bg-green-500", label: "☀️ Lunch" },
  snack: { bg: "bg-purple-50", border: "border-purple-300", badge: "bg-purple-400", label: "🍎 Snack" },
  dinner: { bg: "bg-blue-50", border: "border-blue-300", badge: "bg-blue-500", label: "🌙 Dinner" },
};

const tips = [
  "💧 Drink 2.5–3L water daily — aids digestion & fat metabolism.",
  "🧂 Use minimal salt; vinegar adds flavor without calories.",
  "🥗 Eat cucumber & tomato freely — very low cal, high fiber.",
  "🍳 Always use olive oil — healthy fat, great for satiety.",
  "⏰ Don't skip meals — spacing keeps metabolism active at 1200 cal.",
  "🐟 Fish & chicken are your protein backbone — prioritize them.",
  "🌿 Drumstick (moringa) is a nutritional powerhouse — use it often.",
];

export default function App() {
  const [activeDay, setActiveDay] = useState("Monday");
  const [expanded, setExpanded] = useState({});

  const toggle = (key) => setExpanded(e => ({ ...e, [key]: !e[key] }));

  const dayMeals = meals[activeDay];
  const totalCal = Object.values(dayMeals).reduce((s, m) => s + m.cal, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl p-5 mb-5 text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-1">🥗 Weekly Meal Prep</h1>
        <p className="text-sm opacity-90">Personalized • ~1200 Cal/day • 78 kg</p>
        <div className="mt-3 flex gap-3 text-xs flex-wrap">
          <span className="bg-white/20 rounded-full px-3 py-1">✅ High Protein</span>
          <span className="bg-white/20 rounded-full px-3 py-1">✅ Balanced Macros</span>
          <span className="bg-white/20 rounded-full px-3 py-1">✅ Indian Pantry</span>
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {days.map(d => (
          <button
            key={d}
            onClick={() => setActiveDay(d)}
            className={`flex-shrink-0 px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeDay === d
                ? "bg-emerald-600 text-white shadow-md scale-105"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {d.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Calorie Banner */}
      <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 mb-4 flex justify-between items-center shadow-sm">
        <span className="text-gray-600 font-medium">{activeDay}&apos;s Total</span>
        <span className="text-2xl font-bold text-emerald-600">{totalCal} kcal</span>
      </div>

      {/* Meals */}
      <div className="space-y-3 mb-6">
        {Object.entries(dayMeals).map(([type, meal]) => {
          const c = mealColors[type];
          const key = `${activeDay}-${type}`;
          const open = expanded[key];
          return (
            <div key={type} className={`rounded-xl border ${c.border} ${c.bg} overflow-hidden shadow-sm`}>
              <button
                onClick={() => toggle(key)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-white text-xs font-bold ${c.badge} rounded-full px-2 py-0.5`}>
                    {c.label}
                  </span>
                  <span className="font-semibold text-gray-800 text-sm">{meal.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm font-medium">{meal.cal} cal</span>
                  <span className="text-gray-400">{open ? "▲" : "▼"}</span>
                </div>
              </button>
              {open && (
                <div className="px-4 pb-4 pt-1 border-t border-gray-200">
                  <p className="text-gray-700 text-sm mb-2">{meal.desc}</p>
                  <p className="text-xs text-gray-500 font-mono bg-white/60 rounded-lg px-3 py-1 inline-block">{meal.macros}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Nutrition Coverage */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4 shadow-sm">
        <h2 className="font-bold text-gray-800 mb-3">🧬 Nutrition Coverage</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            ["Protein", "Fish, Chicken, Curd, Milk, Makhana", "✅"],
            ["Healthy Fats", "Olive Oil, Almond/Sunflower/Pumpkin Spread, Chia", "✅"],
            ["Carbs", "Pasta, Bread, Potato, Maggi, Makhana", "✅"],
            ["Fiber", "Drumstick, Bell Pepper, Cucumber, Tomato, Chia", "✅"],
            ["Vitamins", "Bell Pepper (C), Drumstick (A,K), Tomato, Watermelon", "✅"],
            ["Calcium", "Milk, Curd, Cheese Spread", "✅"],
            ["Iron", "Makhana, Pumpkin Seeds, Fish", "✅"],
            ["Antioxidants", "Garlic, Tomato, Watermelon, Bell Pepper", "✅"],
          ].map(([n, s, e]) => (
            <div key={n} className="bg-gray-50 rounded-lg p-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">{n}</span>
                <span>{e}</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
        <h2 className="font-bold text-gray-800 mb-3">💡 Tips for Success</h2>
        <ul className="space-y-2">
          {tips.map((t, i) => (
            <li key={i} className="text-sm text-gray-700">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
