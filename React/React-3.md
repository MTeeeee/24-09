---
revealjs: true
theme: white
highlightTheme: github
---
<link rel="stylesheet" href="assets/style.css">

# States in React – Tag 3

## 1. Einführung in Tag 3  

Willkommen zu Tag 3! Heute lernen wir **State in React**, warum wir ihn brauchen und wie wir damit arbeiten.  

---

## 2. Lernziele für Tag 3  

✅ Verstehen, was State in React ist  
✅ Den Unterschied zwischen Props und State kennen  
✅ `useState` in einer React-Komponente nutzen  
✅ Ein kleines Projekt mit State umsetzen  

---

## 3. Themenübersicht für Tag 3  

| Thema | Inhalt |
|---|---|
| Einführung in State | Was ist State und warum brauchen wir ihn? |
| `useState` nutzen | Grundlagen des State-Managements in React |
| Mini-Projekt | Eine kleine To-Do-App mit State bauen |
| Zusammenfassung & Quiz | Was haben wir gelernt? |

---

## 4. Agenda für Tag 3  

- **Wiederholung von Tag 1 & 2**  
- **Einführung in State**  
- **Projekt: To-Do-Listen-Manager bauen**  
- **Zusammenfassung & Multiple-Choice-Fragen**  

---

## 5. 📢 Wiederholung: Was haben wir bisher gelernt?  

### **Tag 1 – Grundlagen von React**  

✅ JSX – Die Syntax von React  
✅ Komponenten und Props  
✅ Einfache React-Projekte mit Vite erstellen  

### **Tag 2 – Wiederverwendbare Komponenten**  

✅ Warum Props wichtig sind  
✅ Wiederverwendbare Komponenten erstellen  
✅ Strukturierte Code-Organisation  

---

## 6. Quiz: Welche Funktion haben Props in React?  

a) Sie speichern lokale Daten innerhalb einer Komponente  
b) Sie erlauben Datenübergabe zwischen Komponenten  
c) Sie verändern den State einer Komponente  
d) Sie sind identisch mit CSS-Klassen  

---

## 7. ✅ Antwort: Richtige Antwort  

**b) Sie erlauben Datenübergabe zwischen Komponenten**  

Props ermöglichen es, **Daten von einer Eltern- an eine Kind-Komponente** zu übergeben.  

---

## 8. Quiz: Warum ist es sinnvoll, Komponenten wiederverwendbar zu machen?  

a) Damit jede Seite individuell gestaltet wird  
b) Weil React es erfordert  
c) Um den Code strukturierter, lesbarer und wartbarer zu machen  
d) Weil Wiederverwendung in JavaScript nicht möglich ist  

---

## 9. ✅ Antwort: Richtige Antwort  

**c) Um den Code strukturierter, lesbarer und wartbarer zu machen**  

Wiederverwendbare Komponenten machen die UI-Entwicklung **effizienter**.  

---

## 10. Was ist State?  

**State ist ein Mechanismus in React, um den internen Zustand einer Komponente zu speichern und zu aktualisieren.**  

Beispiel:  

```jsx
const [count, setCount] = useState(0);
```  

Hier speichert `count` den aktuellen Wert, `setCount` aktualisiert ihn.  

---

## 11. Props vs. State – Der Unterschied  

| **Feature** | **Props** | **State** |
|------------|---------|--------|
| Wer verwaltet ihn? | Eltern-Komponente | Eigene Komponente |
| Ist veränderbar? | ❌ Nein | ✅ Ja |
| Wie wird er aktualisiert? | Über neue Props | Mit `setState` bzw. `useState` |
| Beispiel | `<Greeting name="Max" />` | `const [count, setCount] = useState(0);` |

---

## 12. Warum brauchen wir State in React?  

✅ Um interaktive Elemente wie Formulare oder Zähler zu erstellen  
✅ Um Daten innerhalb einer Komponente dynamisch zu speichern  
✅ Um React zu sagen, wann eine Komponente neu gerendert werden muss  

---

## 13. 📢 Blitzfrage: Welche Probleme löst State?  

---

## 14. ✅ Blitzantwort: State speichert und aktualisiert Daten innerhalb einer Komponente  

State ist besonders nützlich, wenn sich Werte **während der Laufzeit** ändern.  

---

## 15. Einführung: `useState` verwenden  

State wird in **funktionalen Komponenten** mit **`useState`** definiert.  

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Aktueller Wert: {count}</p>
      <button onClick={() => setCount(count + 1)}>Erhöhen</button>
    </div>
  );
}
```  

Hier speichert **`count`** den aktuellen Wert, und **`setCount`** aktualisiert ihn.  

---

## 16. Projektübersicht: Was werden wir bauen?  

Wir erstellen eine **einfache To-Do-Liste**, in der wir:  
✅ Aufgaben hinzufügen können  
✅ Aufgaben löschen können  
✅ Aufgaben als erledigt markieren können  

---

## 17. Schritt 1: Neues Projekt mit Vite aufsetzen  

Falls noch nicht geschehen, erstelle ein neues React-Projekt:  

```sh
npm create vite@latest todo-app --template react
cd todo-app
npm install
npm run dev
```  

🔹 **Öffne das Projekt in VS Code und starte den Entwicklungsserver.**  

---

## 18. Schritt 2: Grundlegende Komponentenstruktur definieren  

In `src/App.jsx` legen wir die Grundstruktur fest:  

```jsx
function App() {
  return (
    <div>
      <h1>To-Do Liste</h1>
    </div>
  );
}

export default App;
```  

🔹 **Ergebnis:** Die App zeigt nur den Titel **"To-Do Liste"** an.  

---

## 19. Schritt 3: `useState` für die To-Do-Liste nutzen  

Jetzt fügen wir `useState` hinzu, um die Aufgaben zu speichern.  

Öffne `src/App.jsx` und ändere den Code:  

```jsx
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>To-Do Liste</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```  

🔹 **Ergebnis:** Die App kann jetzt Aufgaben anzeigen (aber noch nicht hinzufügen).  

---

## 20. Schritt 4: Aufgaben zur Liste hinzufügen  

Wir fügen ein Eingabefeld und einen Button hinzu, um Aufgaben zur Liste hinzuzufügen.  

Ersetze den Code in `App.jsx`:  

```jsx
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <div>
      <h1>To-Do Liste</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={addTask}>Hinzufügen</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```  

🔹 **Ergebnis:** Nutzer können nun Aufgaben eingeben und hinzufügen.  

---

## 21. Schritt 5: Aufgaben aus der Liste entfernen  

Wir fügen eine Lösch-Funktion hinzu.  

Ändere den Code in `App.jsx`:  

```jsx
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>To-Do Liste</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={addTask}>Hinzufügen</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```  

🔹 **Ergebnis:** Aufgaben können nun gelöscht werden.  

---

## 22. Schritt 6: Aufgaben als erledigt markieren  

Wir fügen eine Funktion hinzu, um Aufgaben als erledigt zu markieren.  

Ändere den Code in `App.jsx`:  

```jsx
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  }

  function toggleTask(index) {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done } : task
    ));
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>To-Do Liste</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={addTask}>Hinzufügen</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.text} 
            <button onClick={() => toggleTask(index)}>✔</button>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```  

🔹 **Ergebnis:** Aufgaben können jetzt als erledigt markiert und durchgestrichen angezeigt werden.  

---

## 23. 📢 Blitzfrage: Wie hilft uns `useState` in interaktiven Anwendungen?  

---

## 24. ✅ Blitzantwort: `useState` erlaubt uns, Werte dynamisch zu aktualisieren und UI zu verändern  

---

## 25. 📢 Wichtige Erkenntnisse aus Tag 3  

✅ State speichert und verwaltet dynamische Daten innerhalb einer Komponente  
✅ `useState` erlaubt uns, Werte zu aktualisieren und das UI zu verändern  
✅ Wir haben eine To-Do-App mit interaktivem State gebaut  

---

## 26. Wie geht es an Tag 4 weiter?  

- Wir lernen **Effekte in React (`useEffect`)** kennen.  
- Wir bauen eine App mit **API-Anbindung**.  

---

## 27. ❓ Multiple-Choice Frage 1  

Welche der folgenden Aussagen über State ist korrekt?  

a) State speichert dynamische Werte innerhalb einer Komponente  
b) State kann nur von der Eltern-Komponente verändert werden  
c) State ist nur für funktionale Komponenten verfügbar  
d) State speichert nur Zeichenketten  

---

## 28. ✅ Antwort: Richtige Antwort  

**a) State speichert dynamische Werte innerhalb einer Komponente**  

---

## 29. ❓ Multiple-Choice Frage 2  

Welche Funktion nutzt man für State in funktionalen Komponenten?  

a) `setState`  
b) `useState`  
c) `this.state`  
d) `updateState`  

---

## 30. ✅ Antwort: Richtige Antwort  

**b) `useState`**  

---

## 31. ❓ Multiple-Choice Frage 3  

Was passiert, wenn sich der State in React ändert?  

a) Die Komponente wird neu gerendert  
b) Die gesamte App wird neu gestartet  
c) Der State bleibt unverändert  
d) Nichts passiert  

---

## 32. ✅ Antwort: Richtige Antwort  

**a) Die Komponente wird neu gerendert**  

---

## 33. ❓ Multiple-Choice Frage 4  

Warum sollte man State nicht direkt verändern (`state = x`)?  

a) Es macht den Code kürzer  
b) Direktes Ändern von State verhindert korrektes Re-Rendering der Komponente  
c) State darf nur in Klassenkomponenten geändert werden  
d) State wird automatisch gespeichert  

---

## 34. ✅ Antwort: Richtige Antwort  

**b) Direktes Ändern von State verhindert korrektes Re-Rendering der Komponente**  

---

## 35. ❓ Multiple-Choice Frage 5  

Kann eine Komponente mehrere `useState`-Werte haben?  

a) Nein, nur ein einziger State ist erlaubt  
b) Ja, eine Komponente kann beliebig viele `useState`-Hooks haben  
c) Nur Klassenkomponenten können mehrere States haben  
d) `useState` kann nur für Zahlen genutzt werden  

---

## 36. ✅ Antwort: Richtige Antwort  

**b) Ja, eine Komponente kann beliebig viele `useState`-Hooks haben**  
