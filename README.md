# NemSzarCsapattalProjekt-Rare-

🎯 Projektcél
Egy C++ nyelven, OpenGL grafikus motorral és egy minimális UI-val rendelkező fizikai motor megvalósítása, amelyben kis szimulációkon keresztül lehet megfigyelni, hogyan hatnak különböző fizikai erők (gravitáció, ütközések, rugók stb.) különböző objektumokra.

🧱 Projekt felépítése
1. Alaptechnológiák
C++ – fő programnyelv (nagy teljesítmény, alacsony szintű kontroll)

OpenGL – grafikus megjelenítéshez

GLFW / SDL – ablakkezeléshez, bemenetkezeléshez

ImGui – az UI elemekhez (popup ablak, slider, gombok stb.)

GLM – vektorműveletekhez, mátrixokhoz (OpenGL barát matematikai könyvtár)

2. Fizikai motor komponensei
Objektumok
Rigid body: tömeg, sebesség, gyorsulás, erők

Alakzat: kör, négyzet, háromszög stb.

Tulajdonságok: súrlódás, rugalmasság, tömeg

Fizikai hatások
Gravitáció (állandó gyorsulás lefelé)

Ütközésdetektálás (AABB vagy SAT)

Ütközéskezelés (impulzus, energiaátadás)

Rugóerő (Hooke-törvény)

Damping (csillapítás, pl. levegőellenállás)

3. UI felület (ImGui)
Popup window-ban állítható paraméterek:

Új objektum hozzáadása (gomb)

Objektum pozíciójának, tömegének, kezdősebességének beállítása

Gravitáció ki/be kapcsolása

Damping mértéke (csúszka)

Rugó csatlakoztatása két test között

„Pause” / „Step” mód (lépésenkénti szimuláció)

„Reset scene” / „Clear all objects”

4. Megjelenítés OpenGL-lel
2D renderelés egyszerűbb: kvázi top-down nézet

Objektumokat alakzatként rajzoljuk ki (GL_TRIANGLES vagy GL_QUADS)

Színek típustól vagy erőtől függően változhatnak

Kamera mozgatása / zoom (egér + scroll)

📌 Példa használati forgatókönyv
Elindítod a programot → megjelenik egy üres világ.

Kattintasz a "New Object" gombra → megjelenik egy négyzet a képernyőn.

Az UI popup ablakban állítod:

tömeg = 5 kg

kezdősebesség = [2, 0]

gravitáció = bekapcsolva

A "Start Simulation" gombra kattintva az objektum elkezd esni, és pattog a talajon.

Újabb objektumot is hozzáadsz, rugóval összekötöd őket.

A damping csúszkával megnézed, hogyan viselkedik a rendszer különböző csillapítással.

🧠 Fejlesztési fókuszpontok
Modularitás: külön modul legyen a fizikai motor, a megjelenítés, az UI

Debug mód: megjeleníti az erővektorokat (piros nyilak stb.)

Profilozás: időmérés frame-ek között

Egységtesztek a fizikai motorhoz

💡 Extrák, ha van idő:
Objektum forgása és nyomaték

3D támogatás (OpenGL miatt viszonylag egyszerű, de számolás nehezebb)

Mentés / betöltés JSON-be

Erővonal-megjelenítés

Interaktív objektummozgatás (egérrel)


👍



![image](https://github.com/user-attachments/assets/619c0a50-8a8d-468f-9fb9-fcf4ce7f8324)
![image](https://github.com/user-attachments/assets/bd05bba3-9ea3-479a-ba91-73f7da302279)




Us:

![image](https://github.com/user-attachments/assets/081f2b63-d72d-4331-b77e-4156d3b13a83)

