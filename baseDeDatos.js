// Togue mba'e: BaseDeDatos.js
// Nutriplanner marandu renda potĩ. Ysaja mbyky.

const ALIMENTOS_PRECARGADOS = [
    {
        id: "alim-1", name: "Leche Materna", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 70, protein: 1.0, carbs: 6.9, fats: 4.4,
        micros: { moisture: 87.5, ash: 0.2, sugars: 6.9, fiber: 0, saturatedFat: 2.01, monoFat: 1.66, polyFat: 0.5, transFat: 0, cholesterol: 14, vitA: 61, vitC: 5, vitD: 0.1, vitE: 0.1, vitK: 0.3, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0.1, folate: 5, sodium: 17, potassium: 51, calcium: 32, phosphorus: 14, magnesium: 3, iron: 0, zinc: 2, copper: 1, selenium: 1.8, alcohol: 0 }
    },
    {
        id: "alim-2", name: "Leche de Burra", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 41, protein: 1.6, carbs: 6.7, fats: 0.9,
        micros: { moisture: 90.4, ash: 0.4, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 1.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 139, phosphorus: 60, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-3", name: "Leche de cabra con Vit. D", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 69, protein: 3.6, carbs: 4.5, fats: 4.1,
        micros: { moisture: 87, ash: 0.8, sugars: 4.5, fiber: 0, saturatedFat: 2.67, monoFat: 1.11, polyFat: 0.15, transFat: 0, cholesterol: 11, vitA: 57, vitC: 1.3, vitD: 1.3, vitE: 0.1, vitK: 0.3, vitB1: 0.1, vitB2: 0.1, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0.1, folate: 1, sodium: 50, potassium: 204, calcium: 134, phosphorus: 111, magnesium: 14, iron: 0.1, zinc: 0.3, copper: 0.1, selenium: 1.4, alcohol: 0 }
    },
    {
        id: "alim-4", name: "Leche fluida entera(1)", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 64, protein: 3.3, carbs: 4.7, fats: 3.7,
        micros: { moisture: 87.7, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 2.28, monoFat: 1.06, polyFat: 0.14, transFat: 0, cholesterol: 14, vitA: 33, vitC: 1.5, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 0.1, niacin: 0, vitB6: 0.3, pantothenicAcid: 0.4, vitB12: 5, folate: 49, sodium: 151, potassium: 119, calcium: 93, phosphorus: 13, magnesium: 0.1, iron: 0.4, zinc: 0, copper: 2, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-5", name: "Leche fluida entera(2)", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 58, protein: 3.2, carbs: 5.6, fats: 2.5,
        micros: { moisture: 88.1, ash: 0.6, sugars: 0, fiber: 0, saturatedFat: 2.09, monoFat: 0.96, polyFat: 0.12, transFat: 0, cholesterol: 13.5, vitA: 31.1, vitC: 1, vitD: 0, vitE: 0, vitK: 0.1, vitB1: 0.1, vitB2: 0.1, niacin: 0, vitB6: 0.3, pantothenicAcid: 0.4, vitB12: 4.9, folate: 59.7, sodium: 141.8, potassium: 123, calcium: 95, phosphorus: 13.5, magnesium: 0.1, iron: 0.4, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-6", name: "Leche entera con sabor", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 80, protein: 2.4, carbs: 10.5, fats: 2.9,
        micros: { moisture: 82.9, ash: 0.8, sugars: 0, fiber: 0.5, saturatedFat: 1.84, monoFat: 0.87, polyFat: 0.15, transFat: 0, cholesterol: 6.4, vitA: 29, vitC: 0.9, vitD: 0, vitE: 0.1, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.3, vitB12: 0.3, folate: 4.7, sodium: 59.6, potassium: 167, calcium: 112, phosphorus: 100, magnesium: 13, iron: 0.2, zinc: 0.4, copper: 0.1, selenium: 1.2, alcohol: 0 }
    },
    {
        id: "alim-7", name: "Leche semidescremada", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 42, protein: 2.6, carbs: 5.1, fats: 1.3,
        micros: { moisture: 90.2, ash: 0.8, sugars: 3.2, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-8", name: "Leche semidescremada con sabor", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 76, protein: 3, carbs: 11.4, fats: 1.9,
        micros: { moisture: 82.2, ash: 0.8, sugars: 9.6, fiber: 0.7, saturatedFat: 1.18, monoFat: 0.46, polyFat: 0.09, transFat: 0, cholesterol: 8, vitA: 64, vitC: 0, vitD: 1.2, vitE: 0, vitK: 0.2, vitB1: 0.1, vitB2: 0.2, niacin: 0.2, vitB6: 0, pantothenicAcid: 0.5, vitB12: 0.3, folate: 2, sodium: 66, potassium: 169, calcium: 109, phosphorus: 102, magnesium: 14, iron: 0.2, zinc: 0.4, copper: 0.1, selenium: 3.4, alcohol: 0 }
    },
    {
        id: "alim-9", name: "Leche semidescremada sabor chocolate", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 52, protein: 3.2, carbs: 5.6, fats: 1.8,
        micros: { moisture: 0, ash: 0, sugars: 5, fiber: 0, saturatedFat: 1.15, monoFat: 0.52, polyFat: 0.05, transFat: 0.1, cholesterol: 6, vitA: 40, vitC: 0, vitD: 0.3, vitE: 1, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 70, sodium: 0, potassium: 93, calcium: 84, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-10", name: "Leche semidescremada sabor frutilla", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 54, protein: 3.1, carbs: 6, fats: 1.9,
        micros: { moisture: 0, ash: 0, sugars: 5.5, fiber: 0, saturatedFat: 1.22, monoFat: 0.55, polyFat: 0.05, transFat: 0.1, cholesterol: 6, vitA: 40, vitC: 0, vitD: 0.3, vitE: 1, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 60, sodium: 0, potassium: 104, calcium: 84, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-11", name: "Leche semidescremada sin lactosa", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 44, protein: 3.1, carbs: 4.6, fats: 1.3,
        micros: { moisture: 0, ash: 0, sugars: 4.6, fiber: 0, saturatedFat: 1, monoFat: 0.35, polyFat: 0.05, transFat: 0.1, cholesterol: 6, vitA: 50, vitC: 0, vitD: 0.4, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 60, sodium: 0, potassium: 101, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-12", name: "Leche descremada(1)", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 32, protein: 3.3, carbs: 4.7, fats: 0.1,
        micros: { moisture: 0, ash: 0, sugars: 4.7, fiber: 0, saturatedFat: 0.03, monoFat: 0.01, polyFat: 0, transFat: 0, cholesterol: 0.2, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 32, sodium: 0, potassium: 115, calcium: 90, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-13", name: "Leche descremada(2)", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 42, protein: 3.4, carbs: 5, fats: 1,
        micros: { moisture: 89.9, ash: 0.8, sugars: 5.2, fiber: 0, saturatedFat: 0.63, monoFat: 0.28, polyFat: 0.04, transFat: 0, cholesterol: 5, vitA: 14, vitC: 0, vitD: 0, vitE: 0, vitK: 0.1, vitB1: 0, vitB2: 0.2, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.4, vitB12: 0.5, folate: 5, sodium: 44, potassium: 150, calcium: 125, phosphorus: 95, magnesium: 11, iron: 0, zinc: 0.4, copper: 0, selenium: 3.3, alcohol: 0 }
    },
    {
        id: "alim-14", name: "Leche en polvo 26% MG", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 489, protein: 28.6, carbs: 36.7, fats: 25.3,
        micros: { moisture: 3.2, ash: 6.2, sugars: 0, fiber: 0, saturatedFat: 16.19, monoFat: 7.62, polyFat: 1.44, transFat: 0, cholesterol: 80, vitA: 281.3, vitC: 9.4, vitD: 0, vitE: 0, vitK: 0.3, vitB1: 2.1, vitB2: 0.6, niacin: 0.3, vitB6: 2.3, pantothenicAcid: 3.3, vitB12: 37.5, folate: 394.6, sodium: 1307, potassium: 912.5, calcium: 775, phosphorus: 84.4, magnesium: 0.5, iron: 3.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-15", name: "Leche en polvo con Vit. D", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 496, protein: 28.6, carbs: 38.4, fats: 26.7,
        micros: { moisture: 2.5, ash: 6.1, sugars: 38.4, fiber: 0, saturatedFat: 16.74, monoFat: 7.92, polyFat: 0.67, transFat: 0, cholesterol: 97, vitA: 258, vitC: 8.6, vitD: 10.5, vitE: 0.6, vitK: 2.2, vitB1: 0.3, vitB2: 1.2, niacin: 0.7, vitB6: 0.3, pantothenicAcid: 2.3, vitB12: 3.3, folate: 37, sodium: 371, potassium: 1330, calcium: 912, phosphorus: 776, magnesium: 85, iron: 0.5, zinc: 3.3, copper: 0.1, selenium: 16.3, alcohol: 0 }
    },
    {
        id: "alim-16", name: "Leche en polvo 18% MG extra calcio", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 454, protein: 28.6, carbs: 42.7, fats: 17.9,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 11.46, monoFat: 5.39, polyFat: 1.02, transFat: 0, cholesterol: 32, vitA: 0, vitC: 75, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 1610, calcium: 865, phosphorus: 0, magnesium: 15, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-17", name: "Leche en polvo 12% MG", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 406, protein: 28.6, carbs: 41.8, fats: 11.1,
        micros: { moisture: 5.4, ash: 7.1, sugars: 0, fiber: 0, saturatedFat: 7.1, monoFat: 3.34, polyFat: 0.63, transFat: 0, cholesterol: 19.8, vitA: 111, vitC: 0, vitD: 0, vitE: 0.2, vitK: 1.7, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 534.9, sodium: 1521.6, potassium: 0, calcium: 946, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-18", name: "Leche en polvo descremada", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 358, protein: 28.6, carbs: 52.2, fats: 0.7,
        micros: { moisture: 4, ash: 8, sugars: 52.2, fiber: 0, saturatedFat: 0.47, monoFat: 0.19, polyFat: 0.03, transFat: 0, cholesterol: 18, vitA: 4, vitC: 5.6, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.4, vitB2: 1.7, niacin: 0.9, vitB6: 0.4, pantothenicAcid: 3.2, vitB12: 4, folate: 50, sodium: 549, potassium: 1705, calcium: 1231, phosphorus: 985, magnesium: 117, iron: 0.3, zinc: 4.4, copper: 0, selenium: 27.3, alcohol: 0 }
    },
    {
        id: "alim-19", name: "Leche en polvo descremada extra calcio", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 349, protein: 28.6, carbs: 52.8, fats: 1.5,
        micros: { moisture: 0, ash: 0, sugars: 52.5, fiber: 0, saturatedFat: 0.9, monoFat: 0.2, polyFat: 0.03, transFat: 0.1, cholesterol: 20, vitA: 450, vitC: 85, vitD: 6, vitE: 18, vitK: 100, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 450, sodium: 0, potassium: 2000, calcium: 900, phosphorus: 240, magnesium: 17, iron: 10, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-20", name: "Leche en polvo Purita Cereal", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 454, protein: 28.6, carbs: 51.2, fats: 19.1,
        micros: { moisture: 0, ash: 0, sugars: 36.8, fiber: 1.7, saturatedFat: 7.9, monoFat: 8.3, polyFat: 2.9, transFat: 0, cholesterol: 56.3, vitA: 538, vitC: 65.8, vitD: 8.6, vitE: 10.2, vitK: 0, vitB1: 0.4, vitB2: 0.7, niacin: 5.9, vitB6: 0.8, pantothenicAcid: 0, vitB12: 1.9, folate: 167, sodium: 207, potassium: 0, calcium: 1066, phosphorus: 644, magnesium: 92.6, iron: 7.1, zinc: 6.7, copper: 0.3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-21", name: "Leche condensada", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 321, protein: 28.6, carbs: 54.4, fats: 8.7,
        micros: { moisture: 27.2, ash: 1.8, sugars: 54.4, fiber: 0, saturatedFat: 5.49, monoFat: 2.43, polyFat: 0.34, transFat: 0, cholesterol: 34, vitA: 74, vitC: 2.6, vitD: 0.2, vitE: 0.2, vitK: 0.6, vitB1: 0.1, vitB2: 0.4, niacin: 0.2, vitB6: 0.1, pantothenicAcid: 0.8, vitB12: 0.4, folate: 11, sodium: 127, potassium: 371, calcium: 284, phosphorus: 253, magnesium: 26, iron: 0.2, zinc: 0.9, copper: 0, selenium: 14.8, alcohol: 0 }
    },
    {
        id: "alim-22", name: "Leche evaporada", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 134, protein: 28.6, carbs: 10, fats: 7.6,
        micros: { moisture: 74, ash: 1.6, sugars: 10, fiber: 0, saturatedFat: 4.59, monoFat: 2.34, polyFat: 0.25, transFat: 0, cholesterol: 29, vitA: 65, vitC: 1.9, vitD: 2, vitE: 0.1, vitK: 0.5, vitB1: 0.1, vitB2: 0.3, niacin: 0.2, vitB6: 0.1, pantothenicAcid: 0.6, vitB12: 0.2, folate: 8, sodium: 106, potassium: 303, calcium: 261, phosphorus: 203, magnesium: 24, iron: 0.2, zinc: 0.8, copper: 0, selenium: 2.3, alcohol: 0 }
    },
    {
        id: "alim-23", name: "Quesillo", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 103, protein: 28.6, carbs: 2.7, fats: 4.5,
        micros: { moisture: 79, ash: 0, sugars: 0, fiber: 0, saturatedFat: 2.85, monoFat: 1.29, polyFat: 0.14, transFat: 0, cholesterol: 14.9, vitA: 48.1, vitC: 0, vitD: 0.6, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 0.1, niacin: 0.1, vitB6: 0.2, pantothenicAcid: 0.6, vitB12: 12.2, folate: 405, sodium: 84.3, potassium: 60, calcium: 131, phosphorus: 5.2, magnesium: 0.1, iron: 0.4, zinc: 0, copper: 6, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-24", name: "Quesillo 0% MG", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 85, protein: 28.6, carbs: 4.4, fats: 1.3,
        micros: { moisture: 0, ash: 0, sugars: 3.8, fiber: 0, saturatedFat: 0.83, monoFat: 0.38, polyFat: 0.03, transFat: 0.06, cholesterol: 4, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 260, sodium: 0, potassium: 434, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-25", name: "Quesillo sin sal", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 151, protein: 28.6, carbs: 4.5, fats: 9,
        micros: { moisture: 0, ash: 0, sugars: 3.8, fiber: 0, saturatedFat: 5.76, monoFat: 2.62, polyFat: 0.23, transFat: 0.39, cholesterol: 29, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 51, sodium: 0, potassium: 420, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-26", name: "Queso cabra", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 364, protein: 28.6, carbs: 0.1, fats: 29.8,
        micros: { moisture: 45.5, ash: 2.9, sugars: 0.1, fiber: 0, saturatedFat: 20.64, monoFat: 6.81, polyFat: 0.71, transFat: 0, cholesterol: 79, vitA: 407, vitC: 0, vitD: 0.5, vitE: 0.3, vitK: 2.5, vitB1: 0.1, vitB2: 0.7, niacin: 1.2, vitB6: 0.1, pantothenicAcid: 0.19, vitB12: 0.2, folate: 2, sodium: 415, potassium: 158, calcium: 298, phosphorus: 375, magnesium: 29, iron: 1.6, zinc: 0.7, copper: 0.6, selenium: 3.8, alcohol: 0 }
    },
    {
        id: "alim-27", name: "Queso chancho", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 356, protein: 28.6, carbs: 5.1, fats: 28,
        micros: { moisture: 42.8, ash: 3.3, sugars: 0.1, fiber: 0, saturatedFat: 16.34, monoFat: 8.82, polyFat: 0.44, transFat: 0.9, cholesterol: 83, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 536, sodium: 0, potassium: 822, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-28", name: "Queso cheddar", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 404, protein: 28.6, carbs: 3.1, fats: 33.3,
        micros: { moisture: 37, ash: 3.7, sugars: 0.5, fiber: 0, saturatedFat: 18.87, monoFat: 9.25, polyFat: 1.42, transFat: 0, cholesterol: 99, vitA: 330, vitC: 0, vitD: 0.6, vitE: 0.7, vitK: 2.4, vitB1: 0, vitB2: 0.4, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.41, vitB12: 1.1, folate: 27, sodium: 653, potassium: 76, calcium: 710, phosphorus: 455, magnesium: 27, iron: 0.1, zinc: 3.6, copper: 0, selenium: 28.5, alcohol: 0 }
    },
    {
        id: "alim-29", name: "Queso crema(1)", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 350, protein: 6.2, carbs: 5.5, fats: 34.4,
        micros: { moisture: 52.6, ash: 1.3, sugars: 3.8, fiber: 0, saturatedFat: 20.21, monoFat: 8.91, polyFat: 1.48, transFat: 0, cholesterol: 101, vitA: 308, vitC: 0, vitD: 0, vitE: 0.9, vitK: 2.1, vitB1: 0, vitB2: 0.2, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.52, vitB12: 0.2, folate: 9, sodium: 314, potassium: 132, calcium: 97, phosphorus: 107, magnesium: 9, iron: 0.1, zinc: 0.5, copper: 0, selenium: 8.6, alcohol: 0 }
    },
    {
        id: "alim-30", name: "Queso crema(2)", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 218, protein: 12, carbs: 7.3, fats: 15.6,
        micros: { moisture: 61.6, ash: 3.5, sugars: 0, fiber: 0, saturatedFat: 9.85, monoFat: 3.94, polyFat: 0.25, transFat: 0.7, cholesterol: 58.3, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 763, sodium: 0, potassium: 430, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-31", name: "Queso fresco(1)", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 228, protein: 16.9, carbs: 1.6, fats: 17.1,
        micros: { moisture: 61.7, ash: 2.7, sugars: 0, fiber: 0, saturatedFat: 11.37, monoFat: 4.62, polyFat: 0.17, transFat: 0, cholesterol: 61, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 401, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-32", name: "Queso fresco(2)", group: "2.1 Leches y Derivados", sourceLink: "4",
        kcal: 117, protein: 12.6, carbs: 4.5, fats: 12.1,
        micros: { moisture: 0, ash: 0, sugars: 3.3, fiber: 0, saturatedFat: 7.74, monoFat: 3.52, polyFat: 0.3, transFat: 0.5, cholesterol: 39, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-33", name: "Queso mantecoso", group: "2.1 Leches y Derivados", sourceLink: "",
        kcal: 0, protein: 0, carbs: 0, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 254, potassium: 0, calcium: 383, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-34", name: "Queso fresco light", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 193, protein: 13.8, carbs: 3.2, fats: 13.9,
        micros: { moisture: 66.5, ash: 2.6, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 363, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-35", name: "Queso gouda(1)", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 356, protein: 24.9, carbs: 2.2, fats: 27.4,
        micros: { moisture: 41.5, ash: 3.9, sugars: 2.2, fiber: 0, saturatedFat: 17.61, monoFat: 7.75, polyFat: 0.66, transFat: 0, cholesterol: 114, vitA: 165, vitC: 0, vitD: 0.5, vitE: 0.2, vitK: 2.3, vitB1: 0, vitB2: 0.3, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 1.5, folate: 21, sodium: 819, potassium: 121, calcium: 700, phosphorus: 546, magnesium: 29, iron: 0.2, zinc: 3.9, copper: 0, selenium: 14.5, alcohol: 0 }
    },
    {
        id: "alim-36", name: "Queso gouda(2)", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 341, protein: 24.8, carbs: 4.8, fats: 24.7,
        micros: { moisture: 42.7, ash: 3, sugars: 0, fiber: 0, saturatedFat: 15.55, monoFat: 6.79, polyFat: 0.47, transFat: 0.5, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 259, sodium: 0, potassium: 850, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-37", name: "Queso Desconocido (Fila sin nombre)", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 394, protein: 24.7, carbs: 8, fats: 29.2,
        micros: { moisture: 35.2, ash: 2.9, sugars: 0, fiber: 0, saturatedFat: 18.93, monoFat: 7.13, polyFat: 0.66, transFat: 0.9, cholesterol: 85.4, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 452, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-38", name: "Queso mozzarella", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 199, protein: 13.5, carbs: 2.3, fats: 15.1,
        micros: { moisture: 66.7, ash: 2.4, sugars: 1.3, fiber: 0, saturatedFat: 9.4, monoFat: 3.92, polyFat: 0.59, transFat: 0.4, cholesterol: 44.9, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 507, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-39", name: "Queso parmesano(1)", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 476, protein: 47.1, carbs: 5.5, fats: 29.5,
        micros: { moisture: 10.3, ash: 7.6, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 142, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 1176, sodium: 0, potassium: 1653, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-40", name: "Queso parmesano(2)", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 420, protein: 28.4, carbs: 13.9, fats: 27.8,
        micros: { moisture: 22.7, ash: 7.2, sugars: 0.1, fiber: 0, saturatedFat: 15.37, monoFat: 7.13, polyFat: 1.39, transFat: 0, cholesterol: 86, vitA: 262, vitC: 0, vitD: 0.5, vitE: 0.5, vitK: 1.7, vitB1: 0, vitB2: 0.4, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 1.4, folate: 6, sodium: 1804, potassium: 180, calcium: 853, phosphorus: 627, magnesium: 34, iron: 0.5, zinc: 4.2, copper: 0, selenium: 34.4, alcohol: 0 }
    },
    {
        id: "alim-41", name: "Queso pategras", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 394, protein: 25.7, carbs: 2.3, fats: 31.2,
        micros: { moisture: 37, ash: 3.8, sugars: 0, fiber: 0, saturatedFat: 19.97, monoFat: 9.39, polyFat: 1.78, transFat: 0, cholesterol: 55.8, vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 0.3, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 720, sodium: 73, potassium: 474, calcium: 578, phosphorus: 14.3, magnesium: 0.5, iron: 3.5, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-42", name: "Queso reggianito", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 339, protein: 33.1, carbs: 5.9, fats: 20.3,
        micros: { moisture: 35.9, ash: 4.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 271, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 742, sodium: 0, potassium: 1199, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-43", name: "Queso suizo", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 393, protein: 27, carbs: 1.5, fats: 31,
        micros: { moisture: 37.6, ash: 3, sugars: 0, fiber: 0, saturatedFat: 18.23, monoFat: 8.05, polyFat: 1.34, transFat: 0, cholesterol: 93, vitA: 228, vitC: 0, vitD: 0, vitE: 0.6, vitK: 1.4, vitB1: 0, vitB2: 0.3, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 3.1, folate: 10, sodium: 187, potassium: 72, calcium: 890, phosphorus: 574, magnesium: 33, iron: 0.1, zinc: 4.4, copper: 0.1, selenium: 30, alcohol: 0 }
    },
    {
        id: "alim-44", name: "Queso untable", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 303, protein: 20, carbs: 3.3, fats: 25,
        micros: { moisture: 50, ash: 1.7, sugars: 0, fiber: 0, saturatedFat: 16, monoFat: 7.53, polyFat: 1.43, transFat: 0, cholesterol: 44.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-45", name: "Ricota", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 174, protein: 11.3, carbs: 3, fats: 13,
        micros: { moisture: 71.7, ash: 1, sugars: 0.3, fiber: 0, saturatedFat: 8.3, monoFat: 3.63, polyFat: 0.39, transFat: 0, cholesterol: 51, vitA: 120, vitC: 0, vitD: 0.2, vitE: 0.1, vitK: 1.1, vitB1: 0, vitB2: 0.2, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0.3, folate: 12, sodium: 84, potassium: 105, calcium: 207, phosphorus: 158, magnesium: 11, iron: 0.4, zinc: 1.2, copper: 0, selenium: 14.5, alcohol: 0 }
    },
    {
        id: "alim-46", name: "Yogurt natural", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 61, protein: 3.5, carbs: 4.7, fats: 3.3,
        micros: { moisture: 87.9, ash: 0.7, sugars: 4.7, fiber: 0, saturatedFat: 2.1, monoFat: 0.89, polyFat: 0.09, transFat: 0, cholesterol: 13, vitA: 27, vitC: 0.5, vitD: 0.1, vitE: 0.1, vitK: 0.2, vitB1: 0, vitB2: 0.1, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.4, vitB12: 0.4, folate: 7, sodium: 46, potassium: 155, calcium: 121, phosphorus: 95, magnesium: 12, iron: 0.1, zinc: 0.6, copper: 0, selenium: 2.2, alcohol: 0 }
    },
    {
        id: "alim-47", name: "Yogurt con sabor", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 101, protein: 4.4, carbs: 14.9, fats: 2.7,
        micros: { moisture: 77.1, ash: 0.9, sugars: 0, fiber: 0.1, saturatedFat: 1.73, monoFat: 0.81, polyFat: 0.15, transFat: 0, cholesterol: 4.8, vitA: 0, vitC: 0.4, vitD: 0, vitE: 0, vitK: 0.4, vitB1: 0.1, vitB2: 0, niacin: 0.4, vitB6: 0.4, pantothenicAcid: 7.5, vitB12: 46.3, folate: 154.6, sodium: 127, potassium: 113, calcium: 11.5, phosphorus: 0, magnesium: 0.6, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-48", name: "Yogurt light", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 56, protein: 5.7, carbs: 7.7, fats: 0.2,
        micros: { moisture: 85.2, ash: 1.2, sugars: 7.7, fiber: 0, saturatedFat: 0.12, monoFat: 0.05, polyFat: 0.01, transFat: 0, cholesterol: 2, vitA: 2, vitC: 0.9, vitD: 0, vitE: 0, vitK: 0.2, vitB1: 0.1, vitB2: 0.2, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.6, vitB12: 0.6, folate: 12, sodium: 77, potassium: 255, calcium: 199, phosphorus: 157, magnesium: 19, iron: 0.1, zinc: 1, copper: 0, selenium: 3.6, alcohol: 0 }
    },
    {
        id: "alim-49", name: "Yogurt sin lactosa", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 53, protein: 3, carbs: 9.3, fats: 0.4,
        micros: { moisture: 86.7, ash: 0.6, sugars: 2, fiber: 0, saturatedFat: 0.23, monoFat: 0.1, polyFat: 0.01, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 55, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-50", name: "Yogurt con frutas", group: "2.1 Leches y Derivados", sourceLink: "2",
        kcal: 114, protein: 4.1, carbs: 18.2, fats: 2.8,
        micros: { moisture: 73.8, ash: 0.8, sugars: 0, fiber: 0.3, saturatedFat: 1.79, monoFat: 0.84, polyFat: 0.16, transFat: 0, cholesterol: 5, vitA: 30, vitC: 0.4, vitD: 0, vitE: 0, vitK: 0.4, vitB1: 0.1, vitB2: 0, niacin: 0.4, vitB6: 0.4, pantothenicAcid: 7.5, vitB12: 46.3, folate: 154.6, sodium: 105, potassium: 105, calcium: 11.5, phosphorus: 0, magnesium: 0.6, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-51", name: "Yogurt con frutas bajo en grasa", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 105, protein: 4.9, carbs: 18.6, fats: 1.4,
        micros: { moisture: 74.1, ash: 1, sugars: 0, fiber: 0, saturatedFat: 0.91, monoFat: 0.39, polyFat: 0.04, transFat: 0, cholesterol: 6, vitA: 0, vitC: 0.7, vitD: 0, vitE: 0, vitK: 0.2, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0.5, pantothenicAcid: 10, vitB12: 65, folate: 216, sodium: 169, potassium: 133, calcium: 16, phosphorus: 0.1, magnesium: 0.8, iron: 0.1, zinc: 3.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-52", name: "Yogurt con fruta sin lactosa", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 56, protein: 3, carbs: 10.1, fats: 0.4,
        micros: { moisture: 86, ash: 0.5, sugars: 0, fiber: 0, saturatedFat: 0.25, monoFat: 0.1, polyFat: 0.01, transFat: 0, cholesterol: 2.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 55, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-53", name: "Tofu(1)", group: "2.1 Leches y Derivados", sourceLink: "1",
        kcal: 78, protein: 9, carbs: 2, fats: 4.2,
        micros: { moisture: 82.9, ash: 1, sugars: 0.6, fiber: 0.9, saturatedFat: 0.79, monoFat: 1.13, polyFat: 1.65, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0.2, vitD: 0, vitE: 0, vitK: 2.4, vitB1: 0.1, vitB2: 0.1, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 19, sodium: 12, potassium: 148, calcium: 201, phosphorus: 121, magnesium: 37, iron: 1.6, zinc: 0.8, copper: 0.2, selenium: 9.9, alcohol: 0 }
    },
    {
        id: "alim-54", name: "Tofu(2)", group: "2.1 Leches y Derivados", sourceLink: "3",
        kcal: 95, protein: 10.4, carbs: 8, fats: 2.4,
        micros: { moisture: 78.4, ash: 0.8, sugars: 0.4, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 73, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-55", name: "Huevo entero(1)", group: "2.2 Huevos", sourceLink: "1",
        kcal: 143, protein: 12.6, carbs: 0.7, fats: 9.5,
        micros: { moisture: 76.2, ash: 1.1, sugars: 0.4, fiber: 0, saturatedFat: 3.13, monoFat: 3.66, polyFat: 1.91, transFat: 0, cholesterol: 372, vitA: 160, vitC: 0, vitD: 2, vitE: 1.1, vitK: 0.3, vitB1: 0, vitB2: 0.5, niacin: 0.1, vitB6: 0.2, pantothenicAcid: 1.5, vitB12: 0.9, folate: 47, sodium: 142, potassium: 138, calcium: 56, phosphorus: 198, magnesium: 12, iron: 1.8, zinc: 1.3, copper: 0.1, selenium: 30.7, alcohol: 0 }
    },
    {
        id: "alim-56", name: "Huevo entero(2)", group: "2.2 Huevos", sourceLink: "3",
        kcal: 149, protein: 12.4, carbs: 0.3, fats: 10.9,
        micros: { moisture: 75.5, ash: 0.9, sugars: 0.1, fiber: 0, saturatedFat: 2.9, monoFat: 4.51, polyFat: 0.99, transFat: 0, cholesterol: 367, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 153, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-57", name: "Clara de huevo", group: "2.2 Huevos", sourceLink: "1",
        kcal: 52, protein: 10.9, carbs: 0.7, fats: 0.2,
        micros: { moisture: 87.6, ash: 0.6, sugars: 0.7, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.4, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0.1, folate: 4, sodium: 166, potassium: 163, calcium: 7, phosphorus: 15, magnesium: 11, iron: 0.1, zinc: 0, copper: 0, selenium: 20, alcohol: 0 }
    },
    {
        id: "alim-58", name: "Yema de huevo", group: "2.2 Huevos", sourceLink: "1",
        kcal: 322, protein: 15.9, carbs: 3.6, fats: 26.5,
        micros: { moisture: 52.3, ash: 1.7, sugars: 0.6, fiber: 0, saturatedFat: 9.55, monoFat: 11.74, polyFat: 4.2, transFat: 0, cholesterol: 1085, vitA: 381, vitC: 0, vitD: 5.4, vitE: 2.6, vitK: 0.7, vitB1: 0.2, vitB2: 0.5, niacin: 0, vitB6: 0.4, pantothenicAcid: 3, vitB12: 2, folate: 146, sodium: 48, potassium: 109, calcium: 129, phosphorus: 390, magnesium: 5, iron: 2.7, zinc: 2.3, copper: 0.1, selenium: 56, alcohol: 0 }
    },
    {
        id: "alim-59", name: "Huevo de codorniz", group: "2.2 Huevos", sourceLink: "1",
        kcal: 158, protein: 13.1, carbs: 0.4, fats: 11.1,
        micros: { moisture: 74.4, ash: 1.1, sugars: 0.4, fiber: 0, saturatedFat: 3.56, monoFat: 4.32, polyFat: 1.32, transFat: 0, cholesterol: 844, vitA: 156, vitC: 0, vitD: 1.4, vitE: 1.1, vitK: 0.3, vitB1: 0.1, vitB2: 0.8, niacin: 0.2, vitB6: 0.2, pantothenicAcid: 1.8, vitB12: 1.6, folate: 66, sodium: 141, potassium: 132, calcium: 64, phosphorus: 226, magnesium: 13, iron: 3.7, zinc: 1.5, copper: 0.1, selenium: 32, alcohol: 0 }
    },
    {
        id: "alim-60", name: "Pollo cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 176, protein: 27.3, carbs: 0, fats: 6.7,
        micros: { moisture: 65.2, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 1.84, monoFat: 2.39, polyFat: 1.54, transFat: 0, cholesterol: 82.9, vitA: 15, vitC: 0, vitD: 0, vitE: 0.5, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 6.1, vitB6: 0.3, pantothenicAcid: 0.7, vitB12: 0.2, folate: 6, sodium: 70, potassium: 180, calcium: 14, phosphorus: 150, magnesium: 21, iron: 1.2, zinc: 2, copper: 0.1, selenium: 16.2, alcohol: 0 }
    },
    {
        id: "alim-61", name: "Pollo pierna", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 199, protein: 22.4, carbs: 1.5, fats: 11.5,
        micros: { moisture: 65.2, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 3.5, monoFat: 5.46, polyFat: 2.51, transFat: 0, cholesterol: 93, vitA: 15, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 70, potassium: 180, calcium: 21, phosphorus: 120, magnesium: 0, iron: 0.8, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-62", name: "Pollo pechuga", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 130, protein: 22.3, carbs: 1.7, fats: 3.8,
        micros: { moisture: 73.2, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 1.16, monoFat: 1.81, polyFat: 0.83, transFat: 0, cholesterol: 94, vitA: 15, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 70, potassium: 180, calcium: 28, phosphorus: 91, magnesium: 0, iron: 2.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-63", name: "Pollo pechuga deshuesado", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 114, protein: 22.2, carbs: 1.9, fats: 1.9,
        micros: { moisture: 72.3, ash: 1.7, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-64", name: "Pato cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 201, protein: 23.5, carbs: 0, fats: 11.2,
        micros: { moisture: 64.2, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 3.95, monoFat: 3.86, polyFat: 1.49, transFat: 0, cholesterol: 89, vitA: 23, vitC: 0, vitD: 0.1, vitE: 0.7, vitK: 3.8, vitB1: 0.3, vitB2: 0.5, niacin: 5.1, vitB6: 0.3, pantothenicAcid: 1.5, vitB12: 0.4, folate: 10, sodium: 65, potassium: 252, calcium: 12, phosphorus: 203, magnesium: 20, iron: 2.7, zinc: 2.6, copper: 0.2, selenium: 22.4, alcohol: 0 }
    },
    {
        id: "alim-65", name: "Pavo pierna", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 123, protein: 22, carbs: 1.2, fats: 3.3,
        micros: { moisture: 73.7, ash: 1, sugars: 0, fiber: 0, saturatedFat: 1.64, monoFat: 1.03, polyFat: 1.43, transFat: 0, cholesterol: 75.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 70, potassium: 298, calcium: 23, phosphorus: 141, magnesium: 0, iron: 2.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-66", name: "Pavo rostizado", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 189, protein: 28.6, carbs: 0.1, fats: 7.4,
        micros: { moisture: 63.5, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 2.16, monoFat: 2.65, polyFat: 2.12, transFat: 0, cholesterol: 109, vitA: 12, vitC: 0, vitD: 0.4, vitE: 0.1, vitK: 0, vitB1: 0, vitB2: 0.3, niacin: 9.6, vitB6: 0.6, pantothenicAcid: 0.9, vitB12: 1, folate: 9, sodium: 103, potassium: 239, calcium: 14, phosphorus: 223, magnesium: 30, iron: 1.1, zinc: 2.5, copper: 0.1, selenium: 29.8, alcohol: 0 }
    },
    {
        id: "alim-67", name: "Carne de cerdo", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 293, protein: 25.1, carbs: 0, fats: 20.7,
        micros: { moisture: 53.4, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 7.51, monoFat: 9.49, polyFat: 2.34, transFat: 0, cholesterol: 93.1, vitA: 3, vitC: 0.3, vitD: 0, vitE: 0.4, vitK: 0, vitB1: 0.6, vitB2: 0.3, niacin: 4.6, vitB6: 0.4, pantothenicAcid: 0.6, vitB12: 0.7, folate: 10, sodium: 59.1, potassium: 328, calcium: 6, phosphorus: 246, magnesium: 22, iron: 1, zinc: 2.9, copper: 0.1, selenium: 35.1, alcohol: 0 }
    },
    {
        id: "alim-68", name: "Cazuela de cerdo", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 264, protein: 20.6, carbs: 4.4, fats: 18.2,
        micros: { moisture: 56.1, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 7.7, monoFat: 9.03, polyFat: 1.47, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 161, potassium: 731, calcium: 21, phosphorus: 107, magnesium: 0, iron: 1.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-69", name: "Lomito de cerdo", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 90, protein: 15.3, carbs: 0.3, fats: 3,
        micros: { moisture: 79.7, ash: 1.6, sugars: 0.3, fiber: 0, saturatedFat: 1.01, monoFat: 1.3, polyFat: 0.58, transFat: 0, cholesterol: 32.1, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 339, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-70", name: "Pierna de cerdo marinada", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 164, protein: 16.6, carbs: 0.2, fats: 10.7,
        micros: { moisture: 71.1, ash: 1.3, sugars: 0.1, fiber: 0, saturatedFat: 4.04, monoFat: 4.92, polyFat: 1.24, transFat: 0, cholesterol: 55.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 204, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-71", name: "Chuleta de cerdo centro marinada", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 284, protein: 13.7, carbs: 0.9, fats: 25,
        micros: { moisture: 59.3, ash: 1, sugars: 0.1, fiber: 0, saturatedFat: 10.15, monoFat: 11.23, polyFat: 2.35, transFat: 0.1, cholesterol: 56, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 156, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-72", name: "Chuleta de cerdo vetada marinada", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 312, protein: 14.7, carbs: 0.2, fats: 28.1,
        micros: { moisture: 56.1, ash: 0.9, sugars: 0.1, fiber: 0, saturatedFat: 11.34, monoFat: 12.48, polyFat: 2.84, transFat: 0.1, cholesterol: 51.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 148, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-73", name: "Costillar de cerdo", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 210, protein: 17.5, carbs: 0.1, fats: 15.5,
        micros: { moisture: 64.9, ash: 1.9, sugars: 0.1, fiber: 0, saturatedFat: 5.72, monoFat: 6.64, polyFat: 1.56, transFat: 0, cholesterol: 73, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 117, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-74", name: "Costillar de cerdo marinado", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 209, protein: 17.2, carbs: 0.2, fats: 15.5,
        micros: { moisture: 66, ash: 1.1, sugars: 0.1, fiber: 0, saturatedFat: 6.08, monoFat: 6.17, polyFat: 2.5, transFat: 0, cholesterol: 55.1, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 154, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-75", name: "Filete de cerdo", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 129, protein: 21.4, carbs: 0.2, fats: 4.7,
        micros: { moisture: 72.8, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 1.99, monoFat: 2.33, polyFat: 0.38, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 59.1, potassium: 328, calcium: 18, phosphorus: 94, magnesium: 0, iron: 1.6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-76", name: "Pulpa de cerdo", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 132, protein: 21.2, carbs: 1.8, fats: 4.4,
        micros: { moisture: 71.8, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 1.86, monoFat: 2.18, polyFat: 0.36, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 91, potassium: 384, calcium: 16, phosphorus: 99, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-77", name: "Cazuela de cordero", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 152, protein: 20.6, carbs: 0.2, fats: 7.6,
        micros: { moisture: 70.6, ash: 1, sugars: 0, fiber: 0, saturatedFat: 4.37, monoFat: 2.87, polyFat: 0.18, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 116, potassium: 356, calcium: 20, phosphorus: 117, magnesium: 0, iron: 1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-78", name: "Chuleta de cordero", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 201, protein: 18.8, carbs: 5.3, fats: 11.6,
        micros: { moisture: 63.6, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 6.67, monoFat: 4.37, polyFat: 0.28, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 142, potassium: 454, calcium: 21, phosphorus: 75, magnesium: 0, iron: 0.6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-79", name: "Pulpa de cordero", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 144, protein: 20.4, carbs: 4.7, fats: 4.8,
        micros: { moisture: 69.6, ash: 0.5, sugars: 0, fiber: 0, saturatedFat: 2.76, monoFat: 1.81, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 101, potassium: 424, calcium: 25, phosphorus: 125, magnesium: 24, iron: 2.9, zinc: 0, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-80", name: "Conejo(1)", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 109, protein: 19.4, carbs: 0.8, fats: 3.1,
        micros: { moisture: 75.5, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 64, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 37, potassium: 300, calcium: 15, phosphorus: 206, magnesium: 0, iron: 1.8, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-81", name: "Conejo(2)", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 136, protein: 20.1, carbs: 0, fats: 5.6,
        micros: { moisture: 72.8, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 1.66, monoFat: 1.5, polyFat: 1.08, transFat: 0, cholesterol: 57, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.2, vitB1: 0.1, vitB2: 0.2, niacin: 7.3, vitB6: 0.5, pantothenicAcid: 0.8, vitB12: 7.2, folate: 8, sodium: 41, potassium: 330, calcium: 13, phosphorus: 213, magnesium: 19, iron: 1.6, zinc: 1.6, copper: 0.1, selenium: 23.7, alcohol: 0 }
    },
    {
        id: "alim-82", name: "Conejo horneado", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 197, protein: 29.1, carbs: 0, fats: 8.1,
        micros: { moisture: 60.6, ash: 1, sugars: 0, fiber: 0, saturatedFat: 2.4, monoFat: 2.17, polyFat: 1.56, transFat: 0, cholesterol: 82, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.2, vitB1: 0.1, vitB2: 0.2, niacin: 8.4, vitB6: 0.5, pantothenicAcid: 0.9, vitB12: 8.3, folate: 11, sodium: 47, potassium: 383, calcium: 19, phosphorus: 263, magnesium: 21, iron: 2.3, zinc: 2.3, copper: 0.2, selenium: 38.5, alcohol: 0 }
    },
    {
        id: "alim-83", name: "Filete", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 124, protein: 21.2, carbs: 1.1, fats: 3.9,
        micros: { moisture: 72.7, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 2.09, monoFat: 1.62, polyFat: 0.16, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 4.3, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 180, potassium: 347, calcium: 12, phosphorus: 136, magnesium: 0, iron: 3.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-84", name: "Guachalomo", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 128, protein: 23.2, carbs: 0.2, fats: 3.8,
        micros: { moisture: 71.8, ash: 1, sugars: 0, fiber: 0, saturatedFat: 2.01, monoFat: 1.58, polyFat: 0.16, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 4.7, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 107, potassium: 515, calcium: 9, phosphorus: 135, magnesium: 0, iron: 1.5, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-85", name: "Lomo centro marinado", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 116, protein: 20.4, carbs: 0.3, fats: 3.7,
        micros: { moisture: 74.4, ash: 1.2, sugars: 0.1, fiber: 0, saturatedFat: 1.44, monoFat: 1.38, polyFat: 0.73, transFat: 0, cholesterol: 42.4, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 202, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-86", name: "Lomo liso", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 145, protein: 23, carbs: 0.6, fats: 5.6,
        micros: { moisture: 70, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 3.01, monoFat: 2.33, polyFat: 0.24, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 4.6, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 73, potassium: 523, calcium: 10, phosphorus: 103, magnesium: 0, iron: 5.5, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-87", name: "Lomo vetado", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 137, protein: 21.8, carbs: 1.3, fats: 4.9,
        micros: { moisture: 70.8, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 2.63, monoFat: 2.04, polyFat: 0.21, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 3, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 75, potassium: 501, calcium: 9, phosphorus: 95, magnesium: 0, iron: 2.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-88", name: "Asiento picana", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 123, protein: 21.4, carbs: 2.4, fats: 3.1,
        micros: { moisture: 72, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 1.59, monoFat: 0.99, polyFat: 0.13, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 3.9, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 73, potassium: 548, calcium: 11, phosphorus: 135, magnesium: 0, iron: 1.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-89", name: "Plateada", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 134, protein: 20.3, carbs: 0.9, fats: 5.5,
        micros: { moisture: 72.4, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 2.95, monoFat: 2.29, polyFat: 0.23, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 4.2, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 76, potassium: 537, calcium: 11, phosphorus: 77, magnesium: 0, iron: 3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-90", name: "Pollo ganso", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 116, protein: 22.2, carbs: 1.1, fats: 2.5,
        micros: { moisture: 73.6, ash: 0.6, sugars: 0, fiber: 0, saturatedFat: 1.34, monoFat: 1.04, polyFat: 0.11, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 4.6, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 76, potassium: 537, calcium: 10, phosphorus: 108, magnesium: 0, iron: 3.7, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-91", name: "Posta negra", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 130, protein: 23.6, carbs: 1.8, fats: 3.1,
        micros: { moisture: 70.7, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 1.66, monoFat: 1.29, polyFat: 0.13, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 5.5, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 86, potassium: 523, calcium: 11, phosphorus: 105, magnesium: 0, iron: 3.8, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-92", name: "Posta rosada", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 127, protein: 21.2, carbs: 4.3, fats: 2.8,
        micros: { moisture: 70.8, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 1.5, monoFat: 1.16, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 3.7, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 92, potassium: 496, calcium: 10, phosphorus: 115, magnesium: 0, iron: 0.6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-93", name: "Cazuela de vacuno", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 145, protein: 22.3, carbs: 0.8, fats: 5.8,
        micros: { moisture: 70.1, ash: 1, sugars: 0, fiber: 0, saturatedFat: 3.11, monoFat: 2.41, polyFat: 0.24, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 2.7, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 129, potassium: 546, calcium: 40, phosphorus: 144, magnesium: 0, iron: 2.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-94", name: "Carne vacuno", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 138, protein: 23.6, carbs: 1.6, fats: 3.1,
        micros: { moisture: 70.7, ash: 1, sugars: 0, fiber: 0, saturatedFat: 1.1, monoFat: 1.3, polyFat: 0.1, transFat: 0, cholesterol: 68, vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 3.3, vitB6: 0.3, pantothenicAcid: 0.3, vitB12: 2.2, folate: 7.6, sodium: 86, potassium: 523, calcium: 11, phosphorus: 105, magnesium: 24.4, iron: 3.8, zinc: 5, copper: 0.1, selenium: 15.3, alcohol: 0 }
    },
    {
        id: "alim-95", name: "Carne vacuno 5% MG", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 174, protein: 27.3, carbs: 0.6, fats: 6.4,
        micros: { moisture: 64.8, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 2.79, monoFat: 2.55, polyFat: 0.31, transFat: 0, cholesterol: 88, vitA: 3, vitC: 0, vitD: 0, vitE: 0.1, vitK: 1.3, vitB1: 0, vitB2: 0.2, niacin: 5.5, vitB6: 0.4, pantothenicAcid: 0.7, vitB12: 2.5, folate: 6, sodium: 58, potassium: 315, calcium: 8, phosphorus: 199, magnesium: 22, iron: 3.1, zinc: 6.9, copper: 0.1, selenium: 22.3, alcohol: 0 }
    },
    {
        id: "alim-96", name: "Carne vacuno 10% MG", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 176, protein: 20, carbs: 0, fats: 10,
        micros: { moisture: 69, ash: 1, sugars: 0, fiber: 0, saturatedFat: 3.93, monoFat: 3.19, polyFat: 0.35, transFat: 0, cholesterol: 65, vitA: 4, vitC: 0, vitD: 0.1, vitE: 0.2, vitK: 0.8, vitB1: 0, vitB2: 0.2, niacin: 5.1, vitB6: 0.4, pantothenicAcid: 0.6, vitB12: 2.2, folate: 6, sodium: 66, potassium: 321, calcium: 12, phosphorus: 184, magnesium: 20, iron: 2, zinc: 4.8, copper: 0.1, selenium: 16.6, alcohol: 0 }
    },
    {
        id: "alim-97", name: "Guatita", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 98, protein: 14.5, carbs: 0, fats: 4,
        micros: { moisture: 81.4, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 2.03, monoFat: 1.31, polyFat: 0.07, transFat: 0, cholesterol: 95, vitA: 0, vitC: 3.4, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.6, vitB12: 1.5, folate: 2, sodium: 46, potassium: 270, calcium: 9, phosphorus: 79, magnesium: 8, iron: 2, zinc: 2.5, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-98", name: "Molleja o contre de pollo cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 146, protein: 27.1, carbs: 1.1, fats: 3.7,
        micros: { moisture: 67.3, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 1.04, monoFat: 0.93, polyFat: 1.06, transFat: 0, cholesterol: 194, vitA: 55.9, vitC: 1.6, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 4, vitB6: 0.1, pantothenicAcid: 0.7, vitB12: 1.9, folate: 53.2, sodium: 65, potassium: 240, calcium: 10, phosphorus: 105, magnesium: 20, iron: 2.9, zinc: 4.4, copper: 0.1, selenium: 11.7, alcohol: 0 }
    },
    {
        id: "alim-99", name: "Corazon de pollo cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 185, protein: 26.4, carbs: 0.1, fats: 7.9,
        micros: { moisture: 64.9, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 2.26, monoFat: 2.01, polyFat: 2.3, transFat: 0, cholesterol: 242, vitA: 8, vitC: 1.8, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.7, niacin: 2.8, vitB6: 0.3, pantothenicAcid: 2.7, vitB12: 7.3, folate: 80, sodium: 48, potassium: 132, calcium: 19, phosphorus: 199, magnesium: 20, iron: 9, zinc: 7.3, copper: 0.5, selenium: 8, alcohol: 0 }
    },
    {
        id: "alim-100", name: "Riñón de vacuno cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 144, protein: 25.5, carbs: 1, fats: 3.4,
        micros: { moisture: 68.8, ash: 1, sugars: 0, fiber: 0, saturatedFat: 1.09, monoFat: 0.74, polyFat: 0.74, transFat: 0, cholesterol: 386, vitA: 373, vitC: 0.8, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 4.1, niacin: 6, vitB6: 0.5, pantothenicAcid: 1.7, vitB12: 51.3, folate: 98, sodium: 133, potassium: 179, calcium: 17.1, phosphorus: 306, magnesium: 18, iron: 7.3, zinc: 4.2, copper: 0.7, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-101", name: "Criadillas de vacuno", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 66, protein: 13.1, carbs: 0.6, fats: 1.2,
        micros: { moisture: 84, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 163, potassium: 255, calcium: 7, phosphorus: 184, magnesium: 0, iron: 1.6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-102", name: "Arrollado de huaso", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 403, protein: 27.4, carbs: 0.5, fats: 32.4,
        micros: { moisture: 38.4, ash: 1.3, sugars: 0.2, fiber: 0, saturatedFat: 11.04, monoFat: 12.53, polyFat: 7.31, transFat: 0, cholesterol: 80, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 417, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-103", name: "Proteina de soja (carne vegetal)", group: "Carnes y Vísceras", sourceLink: "4",
        kcal: 350, protein: 50, carbs: 28, fats: 2,
        micros: { moisture: 0, ash: 0, sugars: 15, fiber: 3, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.6, vitB2: 0.3, niacin: 3, vitB6: 0.5, pantothenicAcid: 1.3, vitB12: 0, folate: 0.4, sodium: 15, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-104", name: "Charqui de vacuno", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 382, protein: 75.6, carbs: 1.7, fats: 8,
        micros: { moisture: 7.3, ash: 7.3, sugars: 0.5, fiber: 0, saturatedFat: 3.29, monoFat: 3.63, polyFat: 0.42, transFat: 0, cholesterol: 238, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1477, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-105", name: "Choricillo cocido", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 212, protein: 15.2, carbs: 0.4, fats: 16.6,
        micros: { moisture: 64.9, ash: 2.9, sugars: 0, fiber: 0, saturatedFat: 5.29, monoFat: 6.31, polyFat: 2.32, transFat: 0, cholesterol: 45, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 796, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-106", name: "Chorizo", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 405, protein: 13.7, carbs: 5, fats: 36.7,
        micros: { moisture: 43, ash: 1.6, sugars: 0.5, fiber: 0, saturatedFat: 11.87, monoFat: 14.55, polyFat: 8.57, transFat: 0, cholesterol: 103, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 609, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-107", name: "Hígado de cordero cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 220, protein: 30.6, carbs: 2.5, fats: 8.8,
        micros: { moisture: 56.7, ash: 1.4, sugars: 0, fiber: 0, saturatedFat: 3.41, monoFat: 1.84, polyFat: 1.31, transFat: 0, cholesterol: 501, vitA: 7491, vitC: 4, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 4, niacin: 12.2, vitB6: 0.5, pantothenicAcid: 4, vitB12: 76.5, folate: 73, sodium: 56, potassium: 221, calcium: 8, phosphorus: 420, magnesium: 22, iron: 8.3, zinc: 7.9, copper: 7.1, selenium: 111.4, alcohol: 0 }
    },
    {
        id: "alim-108", name: "Hígado de pollo cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 167, protein: 24.5, carbs: 0.9, fats: 6.5,
        micros: { moisture: 66.8, ash: 1.4, sugars: 0, fiber: 0, saturatedFat: 2.06, monoFat: 1.42, polyFat: 1.99, transFat: 0, cholesterol: 563, vitA: 3981, vitC: 27.9, vitD: 0, vitE: 0.8, vitK: 0, vitB1: 0.3, vitB2: 2, niacin: 11, vitB6: 0.8, pantothenicAcid: 6.7, vitB12: 16.9, folate: 578, sodium: 76, potassium: 263, calcium: 11, phosphorus: 405, magnesium: 25, iron: 11.6, zinc: 4, copper: 0.5, selenium: 82.4, alcohol: 0 }
    },
    {
        id: "alim-109", name: "Hígado de vacuno cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 191, protein: 29.1, carbs: 5.1, fats: 5.3,
        micros: { moisture: 58.8, ash: 1.7, sugars: 0, fiber: 0, saturatedFat: 2.95, monoFat: 1.12, polyFat: 1.11, transFat: 0, cholesterol: 396, vitA: 9442, vitC: 1.9, vitD: 1.2, vitE: 0.5, vitK: 3.3, vitB1: 0.2, vitB2: 3.4, niacin: 17.5, vitB6: 1, pantothenicAcid: 7.1, vitB12: 70.6, folate: 253, sodium: 79, potassium: 352, calcium: 6, phosphorus: 497, magnesium: 21, iron: 6.5, zinc: 5.3, copper: 14.3, selenium: 36.1, alcohol: 0 }
    },
    {
        id: "alim-110", name: "Lengua de vacuno", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 244, protein: 20.1, carbs: 8.1, fats: 14.6,
        micros: { moisture: 55.8, ash: 1.4, sugars: 0.1, fiber: 0, saturatedFat: 5.33, monoFat: 6.93, polyFat: 1.69, transFat: 0, cholesterol: 66, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 362, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-111", name: "Lengua de vacuno cocida", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 284, protein: 19.3, carbs: 0, fats: 22.3,
        micros: { moisture: 57.9, ash: 0.7, sugars: 0, fiber: 0, saturatedFat: 8.13, monoFat: 10.1, polyFat: 0.75, transFat: 0, cholesterol: 132, vitA: 0, vitC: 1.3, vitD: 0.4, vitE: 0.3, vitK: 1.2, vitB1: 0, vitB2: 0.3, niacin: 3.5, vitB6: 0.2, pantothenicAcid: 0.7, vitB12: 3.1, folate: 7, sodium: 65, potassium: 184, calcium: 5, phosphorus: 145, magnesium: 15, iron: 2.6, zinc: 4.1, copper: 0.1, selenium: 13.2, alcohol: 0 }
    },
    {
        id: "alim-112", name: "Ubre", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 162, protein: 11.2, carbs: 1, fats: 12.6,
        micros: { moisture: 74, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 1.3, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 110, potassium: 144, calcium: 17, phosphorus: 171, magnesium: 0, iron: 1.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-113", name: "Jamón de cerdo", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 180, protein: 16.5, carbs: 4.2, fats: 10.3,
        micros: { moisture: 65.3, ash: 3.7, sugars: 0, fiber: 0, saturatedFat: 3.42, monoFat: 4.9, polyFat: 1.26, transFat: 0, cholesterol: 59, vitA: 0, vitC: 0, vitD: 0.7, vitE: 0.2, vitK: 0, vitB1: 0.6, vitB2: 0.2, niacin: 3.9, vitB6: 0.4, pantothenicAcid: 0, vitB12: 0.9, folate: 1, sodium: 1039, potassium: 319, calcium: 7, phosphorus: 155, magnesium: 16, iron: 0.8, zinc: 1.9, copper: 0.1, selenium: 17.4, alcohol: 0 }
    },
    {
        id: "alim-114", name: "Jamón de cerdo extramagro", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 113, protein: 20.1, carbs: 1.3, fats: 3.1,
        micros: { moisture: 73.4, ash: 2.1, sugars: 0, fiber: 0, saturatedFat: 1.08, monoFat: 1.11, polyFat: 0.57, transFat: 0, cholesterol: 51.1, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 615, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-115", name: "Jamón crudo", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 312, protein: 20.5, carbs: 0, fats: 25.5,
        micros: { moisture: 44, ash: 10, sugars: 0, fiber: 0, saturatedFat: 10.79, monoFat: 12.65, polyFat: 2.07, transFat: 0, cholesterol: 93, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-116", name: "Jamón pavo", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 124, protein: 19.6, carbs: 2.9, fats: 3.8,
        micros: { moisture: 72, ash: 1.7, sugars: 0, fiber: 0, saturatedFat: 1.09, monoFat: 0.86, polyFat: 1.15, transFat: 0, cholesterol: 67, vitA: 0, vitC: 0, vitD: 0, vitE: 0.4, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 3.5, vitB6: 0.2, pantothenicAcid: 0, vitB12: 0.3, folate: 6, sodium: 1038, potassium: 299, calcium: 5, phosphorus: 304, magnesium: 20, iron: 1.4, zinc: 2.4, copper: 0.1, selenium: 37, alcohol: 0 }
    },
    {
        id: "alim-117", name: "Jamón de pavo ahumado", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 118, protein: 16.3, carbs: 3, fats: 4,
        micros: { moisture: 73.5, ash: 3.2, sugars: 1.2, fiber: 0, saturatedFat: 1.2, monoFat: 1.34, polyFat: 0.87, transFat: 0, cholesterol: 64, vitA: 16, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 0.3, niacin: 4.1, vitB6: 0.1, pantothenicAcid: 0, vitB12: 0.8, folate: 0, sodium: 909, potassium: 253, calcium: 7, phosphorus: 289, magnesium: 16, iron: 1, zinc: 2.1, copper: 0, selenium: 38.2, alcohol: 0 }
    },
    {
        id: "alim-118", name: "Jamón de pavo acaramelado", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 83, protein: 17.9, carbs: 0.4, fats: 1.1,
        micros: { moisture: 77.7, ash: 2.9, sugars: 0, fiber: 0, saturatedFat: 0.27, monoFat: 0.19, polyFat: 0.23, transFat: 0, cholesterol: 41.1, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 943, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-119", name: "Jamón picado", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 263, protein: 16.3, carbs: 1.8, fats: 20.7,
        micros: { moisture: 57.4, ash: 3.9, sugars: 0, fiber: 0, saturatedFat: 7.18, monoFat: 9.58, polyFat: 2.47, transFat: 0, cholesterol: 70, vitA: 0, vitC: 0, vitD: 0.7, vitE: 0.3, vitK: 0, vitB1: 0.7, vitB2: 0.2, niacin: 4.2, vitB6: 0.3, pantothenicAcid: 0.2, vitB12: 1, folate: 1, sodium: 1245, potassium: 311, calcium: 10, phosphorus: 157, magnesium: 16, iron: 0.8, zinc: 1.9, copper: 0.1, selenium: 20, alcohol: 0 }
    },
    {
        id: "alim-120", name: "Longaniza(1)", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 397, protein: 14, carbs: 2.1, fats: 36.9,
        micros: { moisture: 45, ash: 2, sugars: 0.6, fiber: 0, saturatedFat: 11.82, monoFat: 14.57, polyFat: 8.76, transFat: 0, cholesterol: 80, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 587, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-121", name: "Longaniza(2)", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 346, protein: 14.3, carbs: 0.6, fats: 31.3,
        micros: { moisture: 51.1, ash: 2.7, sugars: 0, fiber: 0, saturatedFat: 11.27, monoFat: 14.34, polyFat: 4.03, transFat: 0, cholesterol: 76, vitA: 0, vitC: 2, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.6, vitB2: 0.2, niacin: 3.3, vitB6: 0.4, pantothenicAcid: 0.5, vitB12: 0.9, folate: 8, sodium: 731, potassium: 253, calcium: 18, phosphorus: 142, magnesium: 14, iron: 1.2, zinc: 1.8, copper: 0.1, selenium: 24.8, alcohol: 0 }
    },
    {
        id: "alim-122", name: "Mortadela", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 311, protein: 16.4, carbs: 3.1, fats: 25.4,
        micros: { moisture: 52.3, ash: 2.9, sugars: 0, fiber: 0, saturatedFat: 9.51, monoFat: 11.38, polyFat: 3.12, transFat: 0, cholesterol: 56, vitA: 0, vitC: 0, vitD: 1, vitE: 0.2, vitK: 1.6, vitB1: 0.1, vitB2: 0.2, niacin: 2.7, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 1.5, folate: 3, sodium: 1246, potassium: 163, calcium: 18, phosphorus: 97, magnesium: 11, iron: 1.4, zinc: 2.1, copper: 0.1, selenium: 22.6, alcohol: 0 }
    },
    {
        id: "alim-123", name: "Nugget de pollo", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 248, protein: 10.7, carbs: 17.8, fats: 14.9,
        micros: { moisture: 55.3, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 35, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 394, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-124", name: "Paté(1)", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 429, protein: 11.5, carbs: 1.3, fats: 42,
        micros: { moisture: 42.3, ash: 2.9, sugars: 0, fiber: 0, saturatedFat: 17.77, monoFat: 20.83, polyFat: 3.4, transFat: 0, cholesterol: 93, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 0.8, niacin: 3.6, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 446, potassium: 181, calcium: 36, phosphorus: 225, magnesium: 0, iron: 6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-125", name: "Paté(2)", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 462, protein: 11.4, carbs: 4.7, fats: 43.8,
        micros: { moisture: 37, ash: 3.1, sugars: 0, fiber: 0, saturatedFat: 14.45, monoFat: 25.61, polyFat: 0.84, transFat: 0, cholesterol: 150, vitA: 1001, vitC: 2, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 2.5, vitB6: 0.1, pantothenicAcid: 1.2, vitB12: 9.4, folate: 60, sodium: 697, potassium: 138, calcium: 70, phosphorus: 200, magnesium: 13, iron: 5.5, zinc: 0.9, copper: 0.2, selenium: 44, alcohol: 0 }
    },
    {
        id: "alim-126", name: "Pechuga de pavo ahumado", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 89, protein: 16.7, carbs: 1.2, fats: 1.9,
        micros: { moisture: 77.4, ash: 2.8, sugars: 0, fiber: 0, saturatedFat: 0.58, monoFat: 0.72, polyFat: 0.5, transFat: 0, cholesterol: 43, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 976, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-127", name: "Pechuga de pavo cocida(1)", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 93, protein: 15.4, carbs: 2.7, fats: 2.3,
        micros: { moisture: 76.9, ash: 2.7, sugars: 0, fiber: 0, saturatedFat: 0.74, monoFat: 0.79, polyFat: 0.67, transFat: 0, cholesterol: 44, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 821, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-128", name: "Pechuga de pavo cocida(2)", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 126, protein: 22.2, carbs: 1.4, fats: 3.5,
        micros: { moisture: 70.9, ash: 2.1, sugars: 0, fiber: 0, saturatedFat: 0.98, monoFat: 1.14, polyFat: 0.84, transFat: 0, cholesterol: 42, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 9.1, vitB6: 0.3, pantothenicAcid: 0.5, vitB12: 0.3, folate: 5, sodium: 397, potassium: 248, calcium: 9, phosphorus: 214, magnesium: 21, iron: 0.7, zinc: 1.5, copper: 0, selenium: 25.7, alcohol: 0 }
    },
    {
        id: "alim-129", name: "Pechuga de pollo cocida", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 101, protein: 17.8, carbs: 2.2, fats: 2.3,
        micros: { moisture: 74.9, ash: 2.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 810, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-130", name: "Pepperoni", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 504, protein: 19.3, carbs: 1.2, fats: 46.3,
        micros: { moisture: 28.6, ash: 4.7, sugars: 0, fiber: 0, saturatedFat: 17.71, monoFat: 20.77, polyFat: 4.46, transFat: 0, cholesterol: 97, vitA: 0, vitC: 0, vitD: 1.3, vitE: 1, vitK: 5.8, vitB1: 0.3, vitB2: 0.3, niacin: 5, vitB6: 0.4, pantothenicAcid: 0.9, vitB12: 1.3, folate: 5, sodium: 1582, potassium: 274, calcium: 19, phosphorus: 158, magnesium: 18, iron: 1.3, zinc: 2.4, copper: 0.1, selenium: 29, alcohol: 0 }
    },
    {
        id: "alim-131", name: "Pernil", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 206, protein: 21.3, carbs: 0.9, fats: 13,
        micros: { moisture: 63.6, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 4.76, monoFat: 6.05, polyFat: 1.62, transFat: 0, cholesterol: 89, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 276, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-132", name: "Prieta(1)", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 253, protein: 9.1, carbs: 6.1, fats: 21.4,
        micros: { moisture: 61.3, ash: 2.1, sugars: 1, fiber: 0, saturatedFat: 8.19, monoFat: 8.64, polyFat: 3.59, transFat: 0, cholesterol: 99, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 703, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-133", name: "Prieta(2)", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 379, protein: 14.6, carbs: 1.3, fats: 34.5,
        micros: { moisture: 47.3, ash: 2.3, sugars: 1.3, fiber: 0, saturatedFat: 13.4, monoFat: 15.9, polyFat: 3.46, transFat: 0, cholesterol: 120, vitA: 0, vitC: 0, vitD: 1.3, vitE: 0.1, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 1.2, vitB6: 0, pantothenicAcid: 0.6, vitB12: 1, folate: 5, sodium: 680, potassium: 38, calcium: 6, phosphorus: 22, magnesium: 8, iron: 6.4, zinc: 1.3, copper: 0, selenium: 15.5, alcohol: 0 }
    },
    {
        id: "alim-134", name: "Queso cabeza(1)", group: "Carnes y Vísceras", sourceLink: "3",
        kcal: 359, protein: 15.5, carbs: 6.8, fats: 30,
        micros: { moisture: 45.8, ash: 1.9, sugars: 0.7, fiber: 0, saturatedFat: 8.81, monoFat: 12.72, polyFat: 7.08, transFat: 0, cholesterol: 66, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 748, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-135", name: "Queso cabeza(2)", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 205, protein: 15.8, carbs: 0, fats: 15.7,
        micros: { moisture: 66, ash: 2.6, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 106, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.5, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-136", name: "Salame(1)", group: "Carnes y Vísceras", sourceLink: "4",
        kcal: 426, protein: 14.5, carbs: 0.7, fats: 40.6,
        micros: { moisture: 0, ash: 0, sugars: 0.5, fiber: 0, saturatedFat: 14.1, monoFat: 17.9, polyFat: 8.41, transFat: 0.1, cholesterol: 93.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 2028, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-137", name: "Salame(2)", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 261, protein: 12.6, carbs: 1.9, fats: 22.2,
        micros: { moisture: 60, ash: 3.3, sugars: 1.5, fiber: 0, saturatedFat: 9.87, monoFat: 10.65, polyFat: 1.04, transFat: 0, cholesterol: 71, vitA: 0, vitC: 0, vitD: 1.2, vitE: 0.2, vitK: 1.3, vitB1: 0.1, vitB2: 0.2, niacin: 3.2, vitB6: 0.2, pantothenicAcid: 1, vitB12: 3.1, folate: 2, sodium: 1140, potassium: 188, calcium: 6, phosphorus: 205, magnesium: 13, iron: 2.2, zinc: 1.8, copper: 0.2, selenium: 14.6, alcohol: 0 }
    },
    {
        id: "alim-138", name: "Seso cocido", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 151, protein: 11.7, carbs: 1.5, fats: 10.5,
        micros: { moisture: 74.9, ash: 1.5, sugars: 0, fiber: 0, saturatedFat: 2.39, monoFat: 1.88, polyFat: 1.63, transFat: 0, cholesterol: 3100, vitA: 6, vitC: 10.5, vitD: 0, vitE: 1.7, vitK: 0.1, vitB1: 0.1, vitB2: 0.2, niacin: 3.6, vitB6: 0.1, pantothenicAcid: 1.2, vitB12: 10.1, folate: 5, sodium: 108, potassium: 244, calcium: 9, phosphorus: 335, magnesium: 12, iron: 2.3, zinc: 1.1, copper: 0.2, selenium: 21.8, alcohol: 0 }
    },
    {
        id: "alim-139", name: "Tocino", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 517, protein: 29.1, carbs: 0.8, fats: 44.2,
        micros: { moisture: 21.6, ash: 4.3, sugars: 0.8, fiber: 0, saturatedFat: 16, monoFat: 21.9, polyFat: 4.3, transFat: 0, cholesterol: 102, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 1.6, vitB1: 0.6, vitB2: 0.3, niacin: 4.9, vitB6: 0.5, pantothenicAcid: 1.1, vitB12: 1.9, folate: 2, sodium: 1420, potassium: 385, calcium: 14, phosphorus: 142, magnesium: 17, iron: 1.9, zinc: 3.2, copper: 0.1, selenium: 26.1, alcohol: 0 }
    },
    {
        id: "alim-140", name: "Turin", group: "Carnes y Vísceras", sourceLink: "2",
        kcal: 299, protein: 15.9, carbs: 3.5, fats: 24.6,
        micros: { moisture: 52.6, ash: 3.4, sugars: 0, fiber: 0, saturatedFat: 10.41, monoFat: 12.2, polyFat: 1.99, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1215, potassium: 270, calcium: 0, phosphorus: 267, magnesium: 0, iron: 3.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-141", name: "Vienesa", group: "Carnes y Vísceras", sourceLink: "4",
        kcal: 250, protein: 12, carbs: 2.5, fats: 21.3,
        micros: { moisture: 0, ash: 0, sugars: 0.5, fiber: 0, saturatedFat: 6.91, monoFat: 8.76, polyFat: 5.63, transFat: 0.4, cholesterol: 53.4, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 793, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-142", name: "Vienesa de pavo", group: "Carnes y Vísceras", sourceLink: "1",
        kcal: 235, protein: 15.4, carbs: 1.6, fats: 18.1,
        micros: { moisture: 63.1, ash: 1.8, sugars: 0, fiber: 0, saturatedFat: 3.84, monoFat: 5.16, polyFat: 4.66, transFat: 0, cholesterol: 160, vitA: 0, vitC: 0.5, vitD: 0.4, vitE: 0.2, vitK: 1.6, vitB1: 0.1, vitB2: 0.2, niacin: 3.7, vitB6: 0.2, pantothenicAcid: 0, vitB12: 0.8, folate: 4, sodium: 639, potassium: 229, calcium: 32, phosphorus: 155, magnesium: 16, iron: 1.1, zinc: 3, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-143", name: "Vienesa de pollo", group: "Carnes y Vísceras", sourceLink: "4",
        kcal: 226, protein: 15.3, carbs: 3.5, fats: 16.7,
        micros: { moisture: 0, ash: 0, sugars: 1, fiber: 0, saturatedFat: 5.6, monoFat: 6.8, polyFat: 3.5, transFat: 0.1, cholesterol: 96, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 713, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Oñemyatyrõ ha oñembojoapy umi Pescados y Mariscos (Arreglo y anexo de Pescados y Mariscos)
    {
        id: "alim-144", name: "Almeja", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 74, protein: 12.8, carbs: 2.6, fats: 1,
        micros: { moisture: 81.8, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0.09, monoFat: 0.08, polyFat: 0.28, transFat: 0, cholesterol: 34, vitA: 90, vitC: 13.1, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 1.8, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 49.4, folate: 16, sodium: 56, potassium: 313, calcium: 46, phosphorus: 168, magnesium: 9, iron: 14, zinc: 1.4, copper: 0.3, selenium: 44, alcohol: 0 }
    },
    {
        id: "alim-145", name: "Almeja conserva en agua", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 121, protein: 20, carbs: 2.8, fats: 3.3,
        micros: { moisture: 71.9, ash: 2, sugars: 0, fiber: 0, saturatedFat: 1.46, monoFat: 0.82, polyFat: 1.01, transFat: 0, cholesterol: 34, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0.6, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 395, potassium: 220, calcium: 62, phosphorus: 458, magnesium: 0, iron: 5.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-146", name: "Caracol de mar", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 106, protein: 16, carbs: 5.5, fats: 2.2,
        micros: { moisture: 73.8, ash: 2.5, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-147", name: "Cholga en agua", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 74, protein: 14.2, carbs: 2.5, fats: 0.8,
        micros: { moisture: 81.1, ash: 1.4, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0.9, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 73, potassium: 237, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-148", name: "Cholga conserva en aceite", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 132, protein: 21.3, carbs: 1.9, fats: 4.4,
        micros: { moisture: 70.8, ash: 1.6, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0.8, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 315, potassium: 89, calcium: 65, phosphorus: 251, magnesium: 0, iron: 3.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-149", name: "Chorito conserva en aceite", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 100, protein: 16, carbs: 1.9, fats: 3.1,
        micros: { moisture: 76.8, ash: 2.2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.6, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 392, potassium: 68, calcium: 43, phosphorus: 426, magnesium: 0, iron: 7.4, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-150", name: "Chorito en agua", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 72, protein: 10, carbs: 4, fats: 1.8,
        micros: { moisture: 82.9, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0.42, monoFat: 0.51, polyFat: 0.61, transFat: 0, cholesterol: 95, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 137, potassium: 138, calcium: 26, phosphorus: 197, magnesium: 34, iron: 4, zinc: 1.6, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-151", name: "Chorito", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 86, protein: 11.9, carbs: 3.7, fats: 2.2,
        micros: { moisture: 80.6, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0.43, monoFat: 0.51, polyFat: 0.61, transFat: 0, cholesterol: 28, vitA: 48, vitC: 8, vitD: 0, vitE: 0.7, vitK: 0, vitB1: 0.2, vitB2: 0.2, niacin: 1.6, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 12, folate: 42, sodium: 286, potassium: 320, calcium: 26, phosphorus: 197, magnesium: 34, iron: 4, zinc: 1.6, copper: 0.1, selenium: 54, alcohol: 0 }
    },
    {
        id: "alim-152", name: "Erizo", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 123, protein: 14.4, carbs: 4.9, fats: 5.1,
        micros: { moisture: 73.7, ash: 1.9, sugars: 0, fiber: 0, saturatedFat: 2.28, monoFat: 1.39, polyFat: 1.35, transFat: 0, cholesterol: 226.2, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 38, potassium: 294, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0.9, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-153", name: "Jibia", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 181, protein: 35, carbs: 9.8, fats: 0.2,
        micros: { moisture: 54.6, ash: 0.4, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 34.7, potassium: 0, calcium: 27.6, phosphorus: 13, magnesium: 20.9, iron: 0, zinc: 17.2, copper: 0.3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-154", name: "Loco", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 114, protein: 21.7, carbs: 5.5, fats: 0.5,
        micros: { moisture: 71.1, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 0.21, monoFat: 0.16, polyFat: 0.13, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.1, niacin: 1.7, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 55, potassium: 147, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0.7, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-155", name: "Macha en conserva en agua", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 118, protein: 21.3, carbs: 2.8, fats: 2.4,
        micros: { moisture: 71.5, ash: 2, sugars: 0, fiber: 0, saturatedFat: 0.92, monoFat: 0.67, polyFat: 0.8, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 1.2, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 332, potassium: 116, calcium: 81, phosphorus: 258, magnesium: 0, iron: 12.5, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-156", name: "Navajuela", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 80, protein: 14.2, carbs: 5, fats: 0.4,
        micros: { moisture: 78.5, ash: 1.9, sugars: 0, fiber: 0, saturatedFat: 0.15, monoFat: 0.11, polyFat: 0.13, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 75, potassium: 233, calcium: 0, phosphorus: 0, magnesium: 0, iron: 4.8, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-157", name: "Ostra", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 81, protein: 9.5, carbs: 5, fats: 2.3,
        micros: { moisture: 82.1, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 0.51, monoFat: 0.36, polyFat: 0.89, transFat: 0, cholesterol: 50, vitA: 81, vitC: 8, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 2, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 16, folate: 10, sodium: 106, potassium: 168, calcium: 8, phosphorus: 162, magnesium: 22, iron: 5.1, zinc: 16.6, copper: 1.6, selenium: 77, alcohol: 0 }
    },
    {
        id: "alim-158", name: "Piure", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 57, protein: 8.8, carbs: 3.3, fats: 0.9,
        micros: { moisture: 84.6, ash: 2.4, sugars: 0, fiber: 0, saturatedFat: 0.29, monoFat: 0.35, polyFat: 0.26, transFat: 0, cholesterol: 61.3, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 57, potassium: 108, calcium: 0, phosphorus: 0, magnesium: 0, iron: 16, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-159", name: "Camaron", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 85, protein: 20.1, carbs: 0, fats: 0.5,
        micros: { moisture: 78.5, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 0.1, monoFat: 0.09, polyFat: 0.15, transFat: 0, cholesterol: 161, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 119, potassium: 264, calcium: 64, phosphorus: 214, magnesium: 35, iron: 0.5, zinc: 1.3, copper: 0.4, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-160", name: "Camaron congelado", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 110, protein: 23.7, carbs: 0, fats: 1.7,
        micros: { moisture: 72.6, ash: 2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 240, potassium: 121, calcium: 25, phosphorus: 229, magnesium: 0, iron: 2.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-161", name: "Centolla", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 87, protein: 17.4, carbs: 0.2, fats: 1.8,
        micros: { moisture: 79.3, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0.28, monoFat: 0.32, polyFat: 0.64, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 312, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-162", name: "Centollon", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 71, protein: 14.5, carbs: 0, fats: 1.5,
        micros: { moisture: 82.6, ash: 1.4, sugars: 0, fiber: 0, saturatedFat: 0.24, monoFat: 0.28, polyFat: 0.53, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 446, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-163", name: "Jaiva", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 115, protein: 18.3, carbs: 3.8, fats: 2.9,
        micros: { moisture: 72, ash: 2.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 9.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 542, potassium: 254, calcium: 226, phosphorus: 394, magnesium: 0, iron: 2.9, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-164", name: "Atún conserva en agua(1)", group: "Pescados y Maríscos", sourceLink: "4",
        kcal: 120, protein: 28, carbs: 0, fats: 1.4,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0.5, monoFat: 0.3, polyFat: 0.6, transFat: 0.1, cholesterol: 56, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 500, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-165", name: "Atún conserva en agua(2)", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 131, protein: 29.6, carbs: 0, fats: 0.5,
        micros: { moisture: 71.3, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0.16, monoFat: 0.14, polyFat: 0.13, transFat: 0, cholesterol: 18, vitA: 23, vitC: 0, vitD: 0, vitE: 0.3, vitK: 0, vitB1: 0, vitB2: 0.1, niacin: 12.4, vitB6: 0.4, pantothenicAcid: 0.4, vitB12: 2.2, folate: 4.7, sodium: 356, potassium: 314, calcium: 12, phosphorus: 185, magnesium: 29, iron: 3.2, zinc: 0.4, copper: 0, selenium: 72.1, alcohol: 0 }
    },
    {
        id: "alim-166", name: "Atún conserva en aceite", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 198, protein: 29.1, carbs: 0, fats: 8.2,
        micros: { moisture: 59.9, ash: 2.8, sugars: 0, fiber: 0, saturatedFat: 1.53, monoFat: 2.95, polyFat: 2.89, transFat: 0, cholesterol: 18, vitA: 23, vitC: 0, vitD: 6.7, vitE: 0.9, vitK: 44, vitB1: 0, vitB2: 0.1, niacin: 12.4, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 2.2, folate: 5, sodium: 416, potassium: 207, calcium: 13, phosphorus: 311, magnesium: 31, iron: 1.4, zinc: 0.9, copper: 0.1, selenium: 76, alcohol: 0 }
    },
    {
        id: "alim-167", name: "Cojinova", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 187, protein: 17.2, carbs: 0.6, fats: 12.9,
        micros: { moisture: 68.2, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 45.8, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 61, potassium: 401, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-168", name: "Congrio colorado", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 77, protein: 15.5, carbs: 3.2, fats: 0.2,
        micros: { moisture: 80, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 0.1, niacin: 1.4, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 63, potassium: 173, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-169", name: "Congrio dorado", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 73, protein: 16.5, carbs: 0.5, fats: 0.5,
        micros: { moisture: 81.4, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 34.6, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 112, potassium: 254, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-170", name: "Congrio negro", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 71, protein: 15.8, carbs: 1.5, fats: 0.2,
        micros: { moisture: 81.4, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 1.5, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 38, potassium: 226, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-171", name: "Corvina", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 97, protein: 20.5, carbs: 2.7, fats: 0.5,
        micros: { moisture: 74.9, ash: 1.4, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 38, potassium: 226, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-172", name: "Jurel(1)", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 122, protein: 21.9, carbs: 0.1, fats: 3.8,
        micros: { moisture: 73, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 1.28, monoFat: 0.86, polyFat: 1.64, transFat: 0, cholesterol: 39, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 72, potassium: 223, calcium: 30, phosphorus: 325, magnesium: 0, iron: 1.8, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-173", name: "Jurel(2)", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 105, protein: 20.3, carbs: 0, fats: 2,
        micros: { moisture: 75.9, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0.36, monoFat: 0.76, polyFat: 0.46, transFat: 0, cholesterol: 53, vitA: 218, vitC: 1.6, vitD: 0, vitE: 0.1, vitK: 0.5, vitB1: 0.1, vitB2: 0.5, niacin: 8.6, vitB6: 0.4, pantothenicAcid: 0.8, vitB12: 15.6, folate: 8, sodium: 158, potassium: 435, calcium: 31, phosphorus: 248, magnesium: 32, iron: 1.8, zinc: 0.6, copper: 0, selenium: 36.5, alcohol: 0 }
    },
    {
        id: "alim-174", name: "Jurel conserva en agua", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 155, protein: 23.8, carbs: 0.3, fats: 6.5,
        micros: { moisture: 66.9, ash: 2.5, sugars: 0, fiber: 0, saturatedFat: 2.19, monoFat: 1.48, polyFat: 2.81, transFat: 0, cholesterol: 73, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 444, potassium: 293, calcium: 21, phosphorus: 246, magnesium: 0, iron: 1.6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-175", name: "Jurel conserva en aceite", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 280, protein: 22, carbs: 0.7, fats: 21,
        micros: { moisture: 54.3, ash: 2, sugars: 0, fiber: 0, saturatedFat: 7.08, monoFat: 4.77, polyFat: 9.07, transFat: 0, cholesterol: 73, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 450, potassium: 286, calcium: 19, phosphorus: 119, magnesium: 0, iron: 1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-176", name: "Lenguado(1)", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 85, protein: 18.9, carbs: 1.4, fats: 0.4,
        micros: { moisture: 78, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0.28, monoFat: 0.23, polyFat: 0.33, transFat: 0, cholesterol: 48.2, vitA: 9.4, vitC: 1.7, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 2.9, vitB6: 0.3, pantothenicAcid: 0.5, vitB12: 1.5, folate: 8, sodium: 81.2, potassium: 361, calcium: 40, phosphorus: 173, magnesium: 31.8, iron: 1.7, zinc: 0.5, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-177", name: "Lenguado(2)", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 70, protein: 12.4, carbs: 0, fats: 1.9,
        micros: { moisture: 84.6, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 0.44, monoFat: 0.54, polyFat: 0.37, transFat: 0, cholesterol: 45, vitA: 10, vitC: 0, vitD: 2.8, vitE: 0.6, vitK: 0.1, vitB1: 0, vitB2: 0, niacin: 1, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 1.1, folate: 5, sodium: 296, potassium: 160, calcium: 21, phosphorus: 252, magnesium: 18, iron: 0.2, zinc: 0.3, copper: 0, selenium: 26.6, alcohol: 0 }
    },
    {
        id: "alim-178", name: "Merluza o pescada", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 89, protein: 18.6, carbs: 0, fats: 1.1,
        micros: { moisture: 78.9, ash: 1.4, sugars: 0, fiber: 0, saturatedFat: 0.18, monoFat: 0.22, polyFat: 0.33, transFat: 0, cholesterol: 139, vitA: 18, vitC: 3, vitD: 0, vitE: 1.1, vitK: 0, vitB1: 0.2, vitB2: 0.1, niacin: 2.4, vitB6: 0.2, pantothenicAcid: 0.4, vitB12: 2.7, folate: 3, sodium: 53, potassium: 274, calcium: 24, phosphorus: 257, magnesium: 25, iron: 2.5, zinc: 1.3, copper: 0.4, selenium: 80, alcohol: 0 }
    },
    {
        id: "alim-179", name: "Mero", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 239, protein: 12.2, carbs: 1.3, fats: 20.5,
        micros: { moisture: 65.1, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 41.8, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 64, potassium: 244, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-180", name: "Pejegallo", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 89, protein: 21.3, carbs: 0.3, fats: 0.3,
        micros: { moisture: 76.9, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 37.1, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 120, potassium: 256, calcium: 19, phosphorus: 184, magnesium: 0, iron: 2.3, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-181", name: "Pejerrey", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 103, protein: 16.4, carbs: 2.9, fats: 2.9,
        micros: { moisture: 76.1, ash: 1.7, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 111.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 112, potassium: 342, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-182", name: "Reineta", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 105, protein: 19.3, carbs: 0.9, fats: 2.7,
        micros: { moisture: 75.4, ash: 1.7, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 142, potassium: 199, calcium: 45, phosphorus: 348, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-183", name: "Roncador", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 88, protein: 18.2, carbs: 1.4, fats: 1.1,
        micros: { moisture: 78.2, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 31, potassium: 172, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.9, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-184", name: "Salmón coho fresco", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 290, protein: 19.1, carbs: 0.3, fats: 23.6,
        micros: { moisture: 56.1, ash: 1, sugars: 0.2, fiber: 0, saturatedFat: 3.91, monoFat: 10.79, polyFat: 6.53, transFat: 0.1, cholesterol: 58.4, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 66, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-185", name: "Salmón", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 146, protein: 21.6, carbs: 0, fats: 5.9,
        micros: { moisture: 71.3, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 1.26, monoFat: 2.13, polyFat: 1.99, transFat: 0, cholesterol: 45, vitA: 40, vitC: 1, vitD: 9, vitE: 0.7, vitK: 0.1, vitB1: 0.1, vitB2: 0.1, niacin: 7.2, vitB6: 0.5, pantothenicAcid: 0.8, vitB12: 4.2, folate: 9, sodium: 46, potassium: 423, calcium: 36, phosphorus: 262, magnesium: 31, iron: 0.6, zinc: 0.4, copper: 0.1, selenium: 36.5, alcohol: 0 }
    },
    {
        id: "alim-186", name: "Salmón filete sin piel", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 165, protein: 20.6, carbs: 0.3, fats: 9,
        micros: { moisture: 69.1, ash: 1, sugars: 0.3, fiber: 0, saturatedFat: 2.08, monoFat: 4.69, polyFat: 1.36, transFat: 0, cholesterol: 59, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 87, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-187", name: "Sardina conserva en aceite", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 309, protein: 21.2, carbs: 0.6, fats: 24.6,
        micros: { moisture: 50.8, ash: 2.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 61.3, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 443, potassium: 359, calcium: 374, phosphorus: 294, magnesium: 0, iron: 3.4, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-188", name: "Sardina española", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 169, protein: 17.1, carbs: 2.3, fats: 10.2,
        micros: { moisture: 68.4, ash: 1.5, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 61.3, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 129, potassium: 312, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-189", name: "Sierra", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 156, protein: 22.1, carbs: 6.3, fats: 4.7,
        micros: { moisture: 65.6, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 59, potassium: 247, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-190", name: "Trucha congelada", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 189, protein: 19.5, carbs: 1.1, fats: 11.9,
        micros: { moisture: 66.2, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 3.05, monoFat: 5.45, polyFat: 2.16, transFat: 0, cholesterol: 51, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 174, potassium: 0, calcium: 14, phosphorus: 0, magnesium: 0, iron: 0.4, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-191", name: "Trucha de cultivo", group: "Pescados y Maríscos", sourceLink: "2",
        kcal: 131, protein: 19.6, carbs: 0.5, fats: 5.6,
        micros: { moisture: 73.1, ash: 1.2, sugars: 0, fiber: 0, saturatedFat: 1.61, monoFat: 2.16, polyFat: 1.83, transFat: 0, cholesterol: 73, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 41, potassium: 433, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-192", name: "Trucha filete", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 198, protein: 17.9, carbs: 1.1, fats: 13.6,
        micros: { moisture: 66.1, ash: 1.3, sugars: 0.1, fiber: 0, saturatedFat: 2.39, monoFat: 5.9, polyFat: 3.96, transFat: 0, cholesterol: 46, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 163, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-193", name: "Trucha fresca de mar", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 104, protein: 16.7, carbs: 0, fats: 3.6,
        micros: { moisture: 78.1, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 1.01, monoFat: 0.88, polyFat: 0.73, transFat: 0, cholesterol: 83, vitA: 30, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.2, vitB1: 0.1, vitB2: 0.2, niacin: 2.4, vitB6: 0.4, pantothenicAcid: 0.8, vitB12: 3, folate: 5, sodium: 58, potassium: 341, calcium: 17, phosphorus: 250, magnesium: 31, iron: 0.3, zinc: 0.5, copper: 0, selenium: 36.5, alcohol: 0 }
    },
    {
        id: "alim-194", name: "Kanikama", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 118, protein: 7.3, carbs: 19.4, fats: 1.3,
        micros: { moisture: 70.6, ash: 1.4, sugars: 2.4, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 560, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-195", name: "Ovas (masago)", group: "Pescados y Maríscos", sourceLink: "1",
        kcal: 33, protein: 5.6, carbs: 2.6, fats: 1.1,
        micros: { moisture: 72.1, ash: 1.4, sugars: 0, fiber: 0, saturatedFat: 0.25, monoFat: 0.25, polyFat: 0.42, transFat: 0, cholesterol: 23.7, vitA: 10.1, vitC: 0.4, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 1.1, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 36.1, potassium: 0, calcium: 11.2, phosphorus: 0, magnesium: 0, iron: 1.6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-196", name: "Paté de trucha ahumada", group: "Pescados y Maríscos", sourceLink: "3",
        kcal: 288, protein: 3.4, carbs: 16.5, fats: 23.2,
        micros: { moisture: 55.1, ash: 1.8, sugars: 0.9, fiber: 0, saturatedFat: 3.4, monoFat: 7.3, polyFat: 10.14, transFat: 0, cholesterol: 33, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 455, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Oñembojoapy umi Leguminosas y Oleaginosas pyahu (Anexo de Leguminosas y Oleaginosas)
    {
        id: "alim-197", name: "Arveja seca", group: "Leguminosas y Oleaginosas", sourceLink: "2",
        kcal: 345, protein: 22.4, carbs: 38.4, fats: 2.2,
        micros: { moisture: 9.6, ash: 3, sugars: 0, fiber: 0, saturatedFat: 0.16, monoFat: 0.24, polyFat: 0.5, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.8, vitD: 0, vitE: 0, vitK: 1.1, vitB1: 0.3, vitB2: 2.9, niacin: 0.2, vitB6: 1.8, pantothenicAcid: 0, vitB12: 0, folate: 274, sodium: 6.4, potassium: 751, calcium: 65, phosphorus: 306, magnesium: 115, iron: 4.5, zinc: 3, copper: 1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-198", name: "Arveja harina", group: "Leguminosas y Oleaginosas", sourceLink: "2",
        kcal: 333, protein: 23.6, carbs: 38.2, fats: 1.2,
        micros: { moisture: 9.6, ash: 3, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.6, vitK: 0.1, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 28, sodium: 886, potassium: 56, calcium: 302, phosphorus: 0, magnesium: 33.3, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-199", name: "Arvejas", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 81, protein: 5.4, carbs: 8.7, fats: 0.4,
        micros: { moisture: 78.9, ash: 0.9, sugars: 5.7, fiber: 5.7, saturatedFat: 0.07, monoFat: 0.04, polyFat: 0.19, transFat: 0, cholesterol: 0, vitA: 38, vitC: 40, vitD: 0, vitE: 0.1, vitK: 24.8, vitB1: 0.3, vitB2: 0.1, niacin: 2.1, vitB6: 0.2, pantothenicAcid: 0.1, vitB12: 0, folate: 65, sodium: 5, potassium: 244, calcium: 25, phosphorus: 108, magnesium: 33, iron: 1.5, zinc: 1.2, copper: 0.2, selenium: 1.8, alcohol: 0 }
    },
    {
        id: "alim-200", name: "Arvejas conserva", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 69, protein: 4.4, carbs: 9.3, fats: 0.4,
        micros: { moisture: 81.7, ash: 0, sugars: 3.4, fiber: 0, saturatedFat: 0.06, monoFat: 0.03, polyFat: 0.16, transFat: 0, cholesterol: 0, vitA: 76.9, vitC: 9.6, vitD: 0, vitE: 0.9, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0.7, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 44.4, sodium: 219, potassium: 173, calcium: 20, phosphorus: 67.1, magnesium: 17.1, iron: 1, zinc: 0.7, copper: 0.1, selenium: 4, alcohol: 0 }
    },
    {
        id: "alim-201", name: "Garbanzo cocido", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 163, protein: 8.8, carbs: 20.4, fats: 2.6,
        micros: { moisture: 60.2, ash: 1.2, sugars: 0, fiber: 6.8, saturatedFat: 0.27, monoFat: 0.58, polyFat: 1.16, transFat: 0, cholesterol: 0, vitA: 3, vitC: 1.3, vitD: 0, vitE: 1.2, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 172, sodium: 7, potassium: 291, calcium: 49, phosphorus: 168, magnesium: 48, iron: 2.9, zinc: 1.5, copper: 0.4, selenium: 3.7, alcohol: 0 }
    },
    {
        id: "alim-202", name: "Garbanzo", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 378, protein: 20.5, carbs: 50.8, fats: 6,
        micros: { moisture: 7.7, ash: 2.9, sugars: 10.7, fiber: 12.2, saturatedFat: 0.6, monoFat: 1.38, polyFat: 2.73, transFat: 0, cholesterol: 0, vitA: 3, vitC: 4, vitD: 0, vitE: 0.8, vitK: 9, vitB1: 0.5, vitB2: 0.2, niacin: 1.5, vitB6: 0.5, pantothenicAcid: 1.6, vitB12: 0, folate: 557, sodium: 24, potassium: 718, calcium: 57, phosphorus: 252, magnesium: 79, iron: 4.3, zinc: 2.8, copper: 0.7, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-203", name: "Garbanzo harina", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 387, protein: 22.4, carbs: 47, fats: 6.7,
        micros: { moisture: 10.3, ash: 2.8, sugars: 10.9, fiber: 10.8, saturatedFat: 0.69, monoFat: 1.5, polyFat: 2.98, transFat: 0, cholesterol: 0, vitA: 2, vitC: 0, vitD: 0, vitE: 0.8, vitK: 9.1, vitB1: 0.5, vitB2: 0.1, niacin: 1.8, vitB6: 0.5, pantothenicAcid: 0.6, vitB12: 0, folate: 437, sodium: 64, potassium: 846, calcium: 45, phosphorus: 318, magnesium: 166, iron: 4.9, zinc: 2.8, copper: 0.9, selenium: 8.3, alcohol: 0 }
    },
    {
        id: "alim-204", name: "Haba", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 72, protein: 5.6, carbs: 7.5, fats: 0.6,
        micros: { moisture: 81, ash: 1.1, sugars: 0, fiber: 4.2, saturatedFat: 0.14, monoFat: 0.02, polyFat: 0.31, transFat: 0, cholesterol: 0, vitA: 18, vitC: 33, vitD: 0, vitE: 0, vitK: 0.2, vitB1: 0.1, vitB2: 1.5, niacin: 0, vitB6: 0.1, pantothenicAcid: 0, vitB12: 0, folate: 96, sodium: 50, potassium: 250, calcium: 22, phosphorus: 95, magnesium: 38, iron: 1.9, zinc: 0.6, copper: 0.1, selenium: 1.2, alcohol: 0 }
    },
    {
        id: "alim-205", name: "Haba seca", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 341, protein: 26.1, carbs: 57.7, fats: 1.5,
        micros: { moisture: 11, ash: 2.8, sugars: 0, fiber: 1.6, saturatedFat: 0.25, monoFat: 0.3, polyFat: 0.63, transFat: 0, cholesterol: 0, vitA: 5, vitC: 1.4, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.6, vitB2: 0.3, niacin: 2.8, vitB6: 0.4, pantothenicAcid: 1, vitB12: 0, folate: 423, sodium: 13, potassium: 1062, calcium: 103, phosphorus: 421, magnesium: 192, iron: 6.7, zinc: 3.1, copper: 0.8, selenium: 7.3, alcohol: 0 }
    },
    {
        id: "alim-206", name: "Lenteja cocida(1)", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 116, protein: 9, carbs: 12.2, fats: 0.4,
        micros: { moisture: 69.6, ash: 0.8, sugars: 1.8, fiber: 7.9, saturatedFat: 0.05, monoFat: 0.06, polyFat: 0.18, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.5, vitD: 0, vitE: 0.1, vitK: 1.7, vitB1: 0.2, vitB2: 0.1, niacin: 1.1, vitB6: 0.2, pantothenicAcid: 0.6, vitB12: 0, folate: 181, sodium: 2, potassium: 369, calcium: 19, phosphorus: 180, magnesium: 36, iron: 3.3, zinc: 1.3, copper: 0.3, selenium: 2.8, alcohol: 0 }
    },
    {
        id: "alim-207", name: "Lenteja cocida(2)", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 352, protein: 24.6, carbs: 52.6, fats: 1.1,
        micros: { moisture: 8.3, ash: 2.7, sugars: 2, fiber: 10.7, saturatedFat: 0.15, monoFat: 0.19, polyFat: 0.53, transFat: 0, cholesterol: 0, vitA: 2, vitC: 4.5, vitD: 0, vitE: 0.5, vitK: 5, vitB1: 0.9, vitB2: 0.2, niacin: 2.6, vitB6: 0.5, pantothenicAcid: 2.1, vitB12: 0, folate: 479, sodium: 6, potassium: 677, calcium: 35, phosphorus: 381, magnesium: 47, iron: 6.5, zinc: 3.3, copper: 0.8, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-208", name: "Lenteja harina", group: "Leguminosas y Oleaginosas", sourceLink: "2",
        kcal: 340, protein: 32.8, carbs: 43, fats: 1,
        micros: { moisture: 7.6, ash: 4.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 21, potassium: 1031, calcium: 49, phosphorus: 464, magnesium: 0, iron: 50.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-209", name: "Poroto cocido", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 139, protein: 9.7, carbs: 19.1, fats: 0.4,
        micros: { moisture: 64.2, ash: 1.7, sugars: 0, fiber: 4.9, saturatedFat: 0.09, monoFat: 0.03, polyFat: 0.15, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 81, sodium: 6.1, potassium: 560.3, calcium: 89.9, phosphorus: 112.8, magnesium: 63.1, iron: 3.7, zinc: 1.4, copper: 0.3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-210", name: "Poroto", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 333, protein: 23.4, carbs: 45.1, fats: 0.9,
        micros: { moisture: 11.3, ash: 4.2, sugars: 2.1, fiber: 15.2, saturatedFat: 0.22, monoFat: 0.07, polyFat: 0.36, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 5.6, vitB1: 0.4, vitB2: 0.1, niacin: 0.5, vitB6: 0.3, pantothenicAcid: 0.7, vitB12: 0, folate: 388, sodium: 16, potassium: 1785, calcium: 240, phosphorus: 301, magnesium: 190, iron: 10.4, zinc: 3.7, copper: 1, selenium: 12.8, alcohol: 0 }
    },
    {
        id: "alim-211", name: "Poroto de soya cocido", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 141, protein: 12.4, carbs: 6.9, fats: 6.4,
        micros: { moisture: 68.6, ash: 1.6, sugars: 0, fiber: 4.2, saturatedFat: 0.74, monoFat: 1.21, polyFat: 3.01, transFat: 0, cholesterol: 0, vitA: 8, vitC: 17, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 0.2, niacin: 1.3, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 111, sodium: 14, potassium: 539, calcium: 145, phosphorus: 158, magnesium: 60, iron: 2.5, zinc: 0.9, copper: 0.1, selenium: 1.4, alcohol: 0 }
    },
    {
        id: "alim-212", name: "Poroto de soya", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 147, protein: 13, carbs: 6.9, fats: 6.8,
        micros: { moisture: 67.5, ash: 1.7, sugars: 0, fiber: 4.2, saturatedFat: 0.79, monoFat: 1.28, polyFat: 3.2, transFat: 0, cholesterol: 0, vitA: 9, vitC: 29, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.4, vitB2: 0.2, niacin: 1.7, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 165, sodium: 15, potassium: 620, calcium: 197, phosphorus: 194, magnesium: 65, iron: 3.6, zinc: 1, copper: 0.1, selenium: 1.5, alcohol: 0 }
    },
    {
        id: "alim-213", name: "Porotos granados", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 115, protein: 7.8, carbs: 13, fats: 0.4,
        micros: { moisture: 69.8, ash: 0, sugars: 0, fiber: 9, saturatedFat: 0.09, monoFat: 0.03, polyFat: 0.17, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 3.3, vitK: 0, vitB1: 0.2, vitB2: 0.1, niacin: 0.4, vitB6: 0.2, pantothenicAcid: 0.4, vitB12: 0, folate: 83, sodium: 2, potassium: 508, calcium: 17, phosphorus: 111, magnesium: 43, iron: 2.4, zinc: 1, copper: 0.2, selenium: 2.5, alcohol: 0 }
    },
    {
        id: "alim-214", name: "Porotos negros", group: "Leguminosas y Oleaginosas", sourceLink: "1",
        kcal: 341, protein: 21.6, carbs: 46.9, fats: 1.4,
        micros: { moisture: 11, ash: 3.6, sugars: 2.1, fiber: 15.5, saturatedFat: 0.37, monoFat: 0.12, polyFat: 0.61, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 5.6, vitB1: 0.9, vitB2: 0.2, niacin: 2, vitB6: 0.3, pantothenicAcid: 0.9, vitB12: 0, folate: 444, sodium: 5, potassium: 1583, calcium: 123, phosphorus: 352, magnesium: 171, iron: 5, zinc: 3.7, copper: 0.8, selenium: 3.2, alcohol: 0 }
    },
    // Mainayon dagiti Semillas, Almendras y Nueces (Agregando Semillas, Almendras y Nueces)
    {
        id: "alim-215", name: "Almendras(1)", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 579, protein: 21.2, carbs: 9, fats: 49.9,
        micros: { moisture: 4.4, ash: 3, sugars: 4.4, fiber: 12.5, saturatedFat: 3.8, monoFat: 31.55, polyFat: 12.33, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 25.6, vitK: 0, vitB1: 0.2, vitB2: 1.1, niacin: 3.6, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 0, folate: 44, sodium: 1, potassium: 733, calcium: 269, phosphorus: 481, magnesium: 270, iron: 3.7, zinc: 3.1, copper: 1, selenium: 4.1, alcohol: 0 }
    },
    {
        id: "alim-216", name: "Almendras(2)", group: "Semillas, Almendras y Nueces", sourceLink: "3",
        kcal: 578, protein: 24, carbs: 7.3, fats: 50.3,
        micros: { moisture: 4.5, ash: 3, sugars: 0, fiber: 10.9, saturatedFat: 4.06, monoFat: 29.7, polyFat: 14.22, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 49, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-217", name: "Avellana", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 628, protein: 15, carbs: 7, fats: 60.8,
        micros: { moisture: 5.3, ash: 2.3, sugars: 4.3, fiber: 9.7, saturatedFat: 4.46, monoFat: 45.65, polyFat: 7.92, transFat: 0, cholesterol: 0, vitA: 1, vitC: 6.3, vitD: 0, vitE: 15, vitK: 14.2, vitB1: 0.6, vitB2: 0.1, niacin: 1.8, vitB6: 0.6, pantothenicAcid: 0.9, vitB12: 0, folate: 113, sodium: 0, potassium: 680, calcium: 114, phosphorus: 290, magnesium: 163, iron: 4.7, zinc: 2.5, copper: 1.7, selenium: 2.4, alcohol: 0 }
    },
    {
        id: "alim-218", name: "Castaña de cajú tostada", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 574, protein: 15.3, carbs: 29.7, fats: 46.4,
        micros: { moisture: 1.7, ash: 4, sugars: 5, fiber: 3, saturatedFat: 9.16, monoFat: 27.32, polyFat: 7.84, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.9, vitK: 34.7, vitB1: 0.2, vitB2: 0.2, niacin: 1.4, vitB6: 0.3, pantothenicAcid: 1.2, vitB12: 0, folate: 69, sodium: 16, potassium: 565, calcium: 45, phosphorus: 490, magnesium: 260, iron: 6, zinc: 5.6, copper: 2.2, selenium: 11.7, alcohol: 0 }
    },
    {
        id: "alim-219", name: "Macadamia", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 718, protein: 7.9, carbs: 5.2, fats: 75.8,
        micros: { moisture: 1.4, ash: 1.1, sugars: 4.6, fiber: 8.6, saturatedFat: 12.06, monoFat: 58.88, polyFat: 1.5, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.2, vitD: 0, vitE: 0.5, vitK: 0, vitB1: 1.2, vitB2: 0.2, niacin: 2.5, vitB6: 0.3, pantothenicAcid: 0.8, vitB12: 0, folate: 11, sodium: 5, potassium: 368, calcium: 85, phosphorus: 188, magnesium: 130, iron: 37, zinc: 1.3, copper: 0.8, selenium: 3.6, alcohol: 0 }
    },
    {
        id: "alim-220", name: "Maní", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 567, protein: 25.8, carbs: 7.6, fats: 49.2,
        micros: { moisture: 6.5, ash: 2.3, sugars: 4.7, fiber: 8.5, saturatedFat: 6.28, monoFat: 24.43, polyFat: 15.56, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 8.3, vitK: 0, vitB1: 0.6, vitB2: 0.1, niacin: 12.1, vitB6: 0.3, pantothenicAcid: 1.8, vitB12: 0, folate: 240, sodium: 18, potassium: 705, calcium: 92, phosphorus: 376, magnesium: 168, iron: 4.6, zinc: 3.3, copper: 1.1, selenium: 7.2, alcohol: 0 }
    },
    {
        id: "alim-221", name: "Maní japonés", group: "Semillas, Almendras y Nueces", sourceLink: "3",
        kcal: 437, protein: 17.7, carbs: 44.2, fats: 21.1,
        micros: { moisture: 2.4, ash: 2.2, sugars: 13.5, fiber: 12.4, saturatedFat: 2.5, monoFat: 16.04, polyFat: 1.65, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 438, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-222", name: "Maní tostado salado", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 587, protein: 24.4, carbs: 12.9, fats: 49.7,
        micros: { moisture: 1.8, ash: 2.9, sugars: 4.9, fiber: 8.4, saturatedFat: 7.72, monoFat: 26.18, polyFat: 9.77, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 4.9, vitK: 0, vitB1: 0.2, vitB2: 0.2, niacin: 14.4, vitB6: 0.5, pantothenicAcid: 1, vitB12: 0, folate: 97, sodium: 410, potassium: 634, calcium: 58, phosphorus: 363, magnesium: 178, iron: 1.6, zinc: 2.8, copper: 0.4, selenium: 9.3, alcohol: 0 }
    },
    {
        id: "alim-223", name: "Nueces(1)", group: "Semillas, Almendras y Nueces", sourceLink: "3",
        kcal: 551, protein: 17.5, carbs: 3.1, fats: 52.1,
        micros: { moisture: 3.4, ash: 1.5, sugars: 3.1, fiber: 22.4, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 18, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-224", name: "Nueces(2)", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 606, protein: 24.3, carbs: 8.2, fats: 56.6,
        micros: { moisture: 4.4, ash: 0, sugars: 0, fiber: 5, saturatedFat: 3.63, monoFat: 12.7, polyFat: 37.5, transFat: 0, cholesterol: 0, vitA: 30, vitC: 3.2, vitD: 0, vitE: 2.5, vitK: 0, vitB1: 0.2, vitB2: 0.1, niacin: 0.7, vitB6: 0.6, pantothenicAcid: 0.6, vitB12: 0, folate: 65.5, sodium: 1, potassium: 524, calcium: 58, phosphorus: 564, magnesium: 202, iron: 3.1, zinc: 3.4, copper: 1, selenium: 17.6, alcohol: 0 }
    },
    {
        id: "alim-225", name: "Pistacho", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 560, protein: 20.2, carbs: 16.6, fats: 45.3,
        micros: { moisture: 4.4, ash: 3, sugars: 7.7, fiber: 10.6, saturatedFat: 5.91, monoFat: 23.26, polyFat: 14.38, transFat: 0, cholesterol: 0, vitA: 26, vitC: 5.6, vitD: 0, vitE: 2.9, vitK: 0, vitB1: 0.9, vitB2: 0.2, niacin: 1.3, vitB6: 1.7, pantothenicAcid: 0.5, vitB12: 0, folate: 51, sodium: 1, potassium: 1025, calcium: 105, phosphorus: 490, magnesium: 121, iron: 3.9, zinc: 2.2, copper: 1.3, selenium: 7, alcohol: 0 }
    },
    {
        id: "alim-226", name: "Castaña cruda pelada", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 369, protein: 5, carbs: 78.4, fats: 3.9,
        micros: { moisture: 9, ash: 3.6, sugars: 0, fiber: 0, saturatedFat: 0.74, monoFat: 1.35, polyFat: 1.55, transFat: 0, cholesterol: 0, vitA: 0, vitC: 15.1, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.4, vitB2: 0.1, niacin: 0.9, vitB6: 0.7, pantothenicAcid: 0.9, vitB12: 0, folate: 110, sodium: 37, potassium: 991, calcium: 64, phosphorus: 137, magnesium: 74, iron: 2.4, zinc: 0.4, copper: 0.7, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-227", name: "Piñón", group: "Semillas, Almendras y Nueces", sourceLink: "2",
        kcal: 180, protein: 4.5, carbs: 0, fats: 1.1,
        micros: { moisture: 53.1, ash: 1.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 0.1, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 344, potassium: 61, calcium: 98, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-228", name: "Piñón deshidratado", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 673, protein: 13.7, carbs: 9.4, fats: 68.4,
        micros: { moisture: 2.3, ash: 2.6, sugars: 3.6, fiber: 3.7, saturatedFat: 4.9, monoFat: 18.76, polyFat: 34.07, transFat: 0, cholesterol: 0, vitA: 1, vitC: 0.8, vitD: 0, vitE: 9.3, vitK: 53.9, vitB1: 0.4, vitB2: 0.2, niacin: 4.4, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 34, sodium: 2, potassium: 597, calcium: 16, phosphorus: 575, magnesium: 251, iron: 5.5, zinc: 6.5, copper: 1.3, selenium: 0.7, alcohol: 0 }
    },
    {
        id: "alim-229", name: "Chía", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 486, protein: 16.5, carbs: 7.7, fats: 30.7,
        micros: { moisture: 5.8, ash: 4.8, sugars: 0, fiber: 34.4, saturatedFat: 3.33, monoFat: 2.31, polyFat: 23.67, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.6, vitD: 0, vitE: 0.5, vitK: 0, vitB1: 0.6, vitB2: 0.2, niacin: 8.8, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 49, sodium: 16, potassium: 407, calcium: 631, phosphorus: 860, magnesium: 335, iron: 7.7, zinc: 4.6, copper: 0.9, selenium: 55.2, alcohol: 0 }
    },
    {
        id: "alim-230", name: "Semilla amapola", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 525, protein: 18, carbs: 8.6, fats: 41.6,
        micros: { moisture: 6, ash: 6.4, sugars: 3, fiber: 19.5, saturatedFat: 4.52, monoFat: 5.98, polyFat: 28.57, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1, vitD: 0, vitE: 1.8, vitK: 0, vitB1: 0.9, vitB2: 0.1, niacin: 0.9, vitB6: 0.2, pantothenicAcid: 0.3, vitB12: 0, folate: 82, sodium: 26, potassium: 719, calcium: 1438, phosphorus: 870, magnesium: 347, iron: 9.8, zinc: 7.9, copper: 1.6, selenium: 13.5, alcohol: 0 }
    },
    {
        id: "alim-231", name: "Semilla tostada de sésamo", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 565, protein: 17, carbs: 11.7, fats: 48,
        micros: { moisture: 3.3, ash: 6, sugars: 0, fiber: 14, saturatedFat: 6.72, monoFat: 18.13, polyFat: 21.04, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.8, vitB2: 0.3, niacin: 4.6, vitB6: 0.8, pantothenicAcid: 0.1, vitB12: 0, folate: 98, sodium: 11, potassium: 475, calcium: 989, phosphorus: 638, magnesium: 356, iron: 14.8, zinc: 7.2, copper: 2.5, selenium: 34.4, alcohol: 0 }
    },
    {
        id: "alim-232", name: "Semilla maravilla tostada pelada", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 619, protein: 17.2, carbs: 9.1, fats: 56.8,
        micros: { moisture: 1, ash: 4.4, sugars: 0, fiber: 11.5, saturatedFat: 5.95, monoFat: 10.84, polyFat: 37.51, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.4, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 0.3, niacin: 4.2, vitB6: 0.8, pantothenicAcid: 7.1, vitB12: 0, folate: 238, sodium: 3, potassium: 491, calcium: 57, phosphorus: 1158, magnesium: 129, iron: 6.8, zinc: 5.3, copper: 1.8, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-233", name: "Semilla zapallo", group: "Semillas, Almendras y Nueces", sourceLink: "1",
        kcal: 559, protein: 30.2, carbs: 4.7, fats: 49.1,
        micros: { moisture: 5.2, ash: 4.8, sugars: 1.4, fiber: 6, saturatedFat: 8.66, monoFat: 16.24, polyFat: 20.98, transFat: 0, cholesterol: 0, vitA: 1, vitC: 1.9, vitD: 0, vitE: 2.2, vitK: 7.3, vitB1: 0.3, vitB2: 0.2, niacin: 5, vitB6: 0.1, pantothenicAcid: 0.8, vitB12: 0, folate: 58, sodium: 7, potassium: 809, calcium: 46, phosphorus: 1233, magnesium: 592, iron: 8.8, zinc: 7.8, copper: 1.3, selenium: 9.4, alcohol: 0 }
    },
    {
        id: "alim-234", name: "Semillas de linaza", group: "Semillas, Almendras y Nueces", sourceLink: "3",
        kcal: 418, protein: 21.9, carbs: 29.6, fats: 22.2,
        micros: { moisture: 5.1, ash: 5.1, sugars: 0, fiber: 16.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Panginayon kadagiti Cereales y Derivados ken 2.8 Papas (Agregando Cereales y Derivados y Papas)
    {
        id: "alim-235", name: "Crutones", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 407, protein: 11.9, carbs: 68.4, fats: 6.6,
        micros: { moisture: 5.5, ash: 2.5, sugars: 0, fiber: 5.1, saturatedFat: 1.51, monoFat: 3.06, polyFat: 1.27, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.6, vitB2: 0.3, niacin: 5.4, vitB6: 0, pantothenicAcid: 0.4, vitB12: 0, folate: 132, sodium: 698, potassium: 124, calcium: 76, phosphorus: 115, magnesium: 31, iron: 4.1, zinc: 0.9, copper: 0.2, selenium: 37.5, alcohol: 0 }
    },
    {
        id: "alim-236", name: "Pan blanco sin sal", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 267, protein: 8.2, carbs: 47.3, fats: 3.6,
        micros: { moisture: 36.7, ash: 1.9, sugars: 4.3, fiber: 2.3, saturatedFat: 0.81, monoFat: 1.61, polyFat: 0.74, transFat: 0, cholesterol: 1, vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 3.1, vitB1: 0.5, vitB2: 0.3, niacin: 4, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 111, sodium: 298, potassium: 119, calcium: 108, phosphorus: 94, magnesium: 24, iron: 3, zinc: 0.6, copper: 0.1, selenium: 22.6, alcohol: 0 }
    },
    {
        id: "alim-237", name: "Pan de centeno", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 259, protein: 8.5, carbs: 42.6, fats: 3.3,
        micros: { moisture: 37.3, ash: 2.5, sugars: 3.9, fiber: 5.8, saturatedFat: 0.63, monoFat: 1.31, polyFat: 0.8, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0.4, vitD: 0, vitE: 0.3, vitK: 1.2, vitB1: 0.4, vitB2: 0.3, niacin: 3.8, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 110, sodium: 603, potassium: 166, calcium: 73, phosphorus: 125, magnesium: 40, iron: 2.8, zinc: 1.1, copper: 0.2, selenium: 30.9, alcohol: 0 }
    },
    {
        id: "alim-238", name: "Pan de miel", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 250, protein: 12, carbs: 44.9, fats: 2.5,
        micros: { moisture: 34.9, ash: 1.7, sugars: 6.4, fiber: 4, saturatedFat: 0.4, monoFat: 0.41, polyFat: 0.87, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 289, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-239", name: "Pan especial", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 212, protein: 10.2, carbs: 38.4, fats: 1.9,
        micros: { moisture: 38.9, ash: 2.2, sugars: 0, fiber: 8.4, saturatedFat: 0.46, monoFat: 0.29, polyFat: 0.53, transFat: 0, cholesterol: 0.8, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 365, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-240", name: "Pan hallulla", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 363, protein: 9.1, carbs: 53.6, fats: 12.5,
        micros: { moisture: 22.8, ash: 2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 564, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-241", name: "Pan integral", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 252, protein: 12.5, carbs: 36.7, fats: 3.5,
        micros: { moisture: 39, ash: 2.3, sugars: 4.3, fiber: 6, saturatedFat: 0.72, monoFat: 0.62, polyFat: 1.59, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 2.7, vitK: 7.8, vitB1: 0.4, vitB2: 0.2, niacin: 4.4, vitB6: 0.2, pantothenicAcid: 0.6, vitB12: 0, folate: 42, sodium: 455, potassium: 254, calcium: 161, phosphorus: 212, magnesium: 75, iron: 2.5, zinc: 1.8, copper: 0.2, selenium: 25.7, alcohol: 0 }
    },
    {
        id: "alim-242", name: "Pan marraqueta", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 272, protein: 10.8, carbs: 49.7, fats: 2.4,
        micros: { moisture: 33, ash: 2, sugars: 4.6, fiber: 2.2, saturatedFat: 0.53, monoFat: 0.36, polyFat: 0.86, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.7, vitB1: 0.7, vitB2: 0.4, niacin: 4.8, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 0, folate: 123, sodium: 502, potassium: 117, calcium: 52, phosphorus: 105, magnesium: 32, iron: 3.9, zinc: 1, copper: 0.2, selenium: 28.6, alcohol: 0 }
    },
    {
        id: "alim-243", name: "Pan molde(1)", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 269, protein: 8.7, carbs: 48.8, fats: 3.2,
        micros: { moisture: 35.6, ash: 0, sugars: 0, fiber: 1.9, saturatedFat: 0.73, monoFat: 1.41, polyFat: 0.91, transFat: 0, cholesterol: 3, vitA: 0, vitC: 0, vitD: 0.1, vitE: 0, vitK: 0.4, vitB1: 0.2, vitB2: 3.3, niacin: 0, vitB6: 0.4, pantothenicAcid: 0, vitB12: 34.5, folate: 504, sodium: 106, potassium: 83.8, calcium: 96.8, phosphorus: 20.7, magnesium: 2.8, iron: 0.6, zinc: 0.1, copper: 27.5, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-244", name: "Pan molde(2)", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 244, protein: 8.1, carbs: 49.9, fats: 1.4,
        micros: { moisture: 35.5, ash: 1.8, sugars: 0, fiber: 3.3, saturatedFat: 0.23, monoFat: 0.08, polyFat: 0.3, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 466, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-245", name: "Pan pita blanco", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 275, protein: 9.1, carbs: 53.5, fats: 1.2,
        micros: { moisture: 32.1, ash: 1.9, sugars: 0, fiber: 2.2, saturatedFat: 0.17, monoFat: 0.11, polyFat: 0.54, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 0.1, vitB1: 2.1, vitB2: 0, niacin: 0.4, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 24, sodium: 536, potassium: 120, calcium: 86, phosphorus: 97, magnesium: 26, iron: 1.4, zinc: 0.8, copper: 0.2, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-246", name: "Pan rallado seco", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 395, protein: 13.4, carbs: 67.5, fats: 5.3,
        micros: { moisture: 6.5, ash: 2.9, sugars: 6.2, fiber: 4.5, saturatedFat: 1.2, monoFat: 1.02, polyFat: 2.06, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 6.6, vitB1: 1, vitB2: 0.4, niacin: 6.6, vitB6: 0.1, pantothenicAcid: 0.6, vitB12: 0.4, folate: 107, sodium: 732, potassium: 196, calcium: 183, phosphorus: 165, magnesium: 43, iron: 4.8, zinc: 1.5, copper: 0.3, selenium: 25.2, alcohol: 0 }
    },
    {
        id: "alim-247", name: "Pan salvado de trigo", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 248, protein: 8.8, carbs: 43.8, fats: 3.4,
        micros: { moisture: 37.8, ash: 2.2, sugars: 9.7, fiber: 4, saturatedFat: 0.78, monoFat: 1.62, polyFat: 0.65, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.3, vitK: 1.3, vitB1: 0.4, vitB2: 0.3, niacin: 4.4, vitB6: 0.2, pantothenicAcid: 0.5, vitB12: 0, folate: 105, sodium: 486, potassium: 227, calcium: 74, phosphorus: 185, magnesium: 81, iron: 3.1, zinc: 1.4, copper: 0.2, selenium: 31, alcohol: 0 }
    },
    {
        id: "alim-248", name: "Pan trigo", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 260, protein: 8.7, carbs: 44, fats: 3.9,
        micros: { moisture: 35.8, ash: 2.1, sugars: 0, fiber: 5.5, saturatedFat: 0.92, monoFat: 1.9, polyFat: 0.68, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.4, vitK: 0.2, vitB1: 3.7, vitB2: 0.3, niacin: 0.5, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 61, sodium: 538, potassium: 177, calcium: 43, phosphorus: 153, magnesium: 52, iron: 2.8, zinc: 1.2, copper: 0.2, selenium: 25.3, alcohol: 0 }
    },
    {
        id: "alim-249", name: "Tortilla para tacos", group: "Cereales y Derivados", sourceLink: "4",
        kcal: 269, protein: 8.9, carbs: 45, fats: 5.9,
        micros: { moisture: 0, ash: 0, sugars: 1.2, fiber: 0, saturatedFat: 2.8, monoFat: 1.5, polyFat: 1.6, transFat: 0.1, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 354, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-250", name: "Arroz blanco", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 370, protein: 6.8, carbs: 78.9, fats: 0.6,
        micros: { moisture: 10.5, ash: 0.5, sugars: 0, fiber: 2.8, saturatedFat: 0.11, monoFat: 0.2, polyFat: 0.2, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 0.1, niacin: 2.1, vitB6: 0.1, pantothenicAcid: 0.8, vitB12: 0, folate: 7, sodium: 7, potassium: 77, calcium: 11, phosphorus: 71, magnesium: 23, iron: 1.6, zinc: 1.2, copper: 0.2, selenium: 15.1, alcohol: 0 }
    },
    {
        id: "alim-251", name: "Arroz blanco cocido", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 130, protein: 2.7, carbs: 27.8, fats: 0.3,
        micros: { moisture: 68.4, ash: 0.4, sugars: 0.1, fiber: 0.4, saturatedFat: 0.08, monoFat: 0.09, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 3, sodium: 1, potassium: 35, calcium: 10, phosphorus: 43, magnesium: 12, iron: 0.2, zinc: 0.5, copper: 0.1, selenium: 7.5, alcohol: 0 }
    },
    {
        id: "alim-252", name: "Arroz integral", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 367, protein: 7.5, carbs: 0.7, fats: 3.2,
        micros: { moisture: 11.8, ash: 1.2, sugars: 3.6, fiber: 3.2, saturatedFat: 0.59, monoFat: 1.05, polyFat: 1, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.6, vitK: 0.6, vitB1: 0.5, vitB2: 0.1, niacin: 6.5, vitB6: 0.5, pantothenicAcid: 1.1, vitB12: 0, folate: 23, sodium: 5, potassium: 250, calcium: 9, phosphorus: 311, magnesium: 116, iron: 1.3, zinc: 2.1, copper: 0.3, selenium: 17.1, alcohol: 0 }
    },
    {
        id: "alim-253", name: "Arroz integral cocido", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 112, protein: 2.3, carbs: 21.7, fats: 0.8,
        micros: { moisture: 73, ash: 0.4, sugars: 0, fiber: 1.8, saturatedFat: 0.17, monoFat: 0.3, polyFat: 0.3, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0, niacin: 1.3, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 4, sodium: 1, potassium: 79, calcium: 10, phosphorus: 77, magnesium: 44, iron: 0.5, zinc: 0.6, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-254", name: "Cabritas", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 387, protein: 12.9, carbs: 63.3, fats: 4.5,
        micros: { moisture: 3.3, ash: 1.4, sugars: 0.9, fiber: 14.5, saturatedFat: 0.64, monoFat: 0.95, polyFat: 2.32, transFat: 0, cholesterol: 0, vitA: 10, vitC: 0, vitD: 0, vitE: 0.3, vitK: 1.2, vitB1: 0.1, vitB2: 0.1, niacin: 2.3, vitB6: 0.2, pantothenicAcid: 0.5, vitB12: 0, folate: 31, sodium: 8, potassium: 329, calcium: 7, phosphorus: 358, magnesium: 144, iron: 3.2, zinc: 3.1, copper: 0.3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-255", name: "Choclo cocido", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 96, protein: 3.4, carbs: 18.6, fats: 1.5,
        micros: { moisture: 73.4, ash: 0.7, sugars: 4.5, fiber: 2.4, saturatedFat: 0.2, monoFat: 0.37, polyFat: 0.6, transFat: 0, cholesterol: 0, vitA: 13, vitC: 5.5, vitD: 0, vitE: 0.1, vitK: 0.4, vitB1: 0.1, vitB2: 0.1, niacin: 1.7, vitB6: 0.1, pantothenicAcid: 0.8, vitB12: 0, folate: 23, sodium: 1, potassium: 218, calcium: 3, phosphorus: 77, magnesium: 26, iron: 0.5, zinc: 0.6, copper: 0, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-256", name: "Choclo congelado", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 81, protein: 2.6, carbs: 16.9, fats: 0.7,
        micros: { moisture: 77, ash: 0.4, sugars: 3.1, fiber: 2.4, saturatedFat: 0.1, monoFat: 0.2, polyFat: 0.32, transFat: 0, cholesterol: 0, vitA: 10, vitC: 3.5, vitD: 0, vitE: 0.1, vitK: 0.3, vitB1: 0, vitB2: 0.1, niacin: 1.3, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 35, sodium: 1, potassium: 233, calcium: 3, phosphorus: 79, magnesium: 28, iron: 0.5, zinc: 0.6, copper: 0, selenium: 0.7, alcohol: 0 }
    },
    {
        id: "alim-257", name: "Choclo", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 86, protein: 3.3, carbs: 16.7, fats: 1.4,
        micros: { moisture: 76.1, ash: 0.6, sugars: 6.3, fiber: 2, saturatedFat: 0.33, monoFat: 0.43, polyFat: 0.49, transFat: 0, cholesterol: 0, vitA: 9, vitC: 6.8, vitD: 0, vitE: 0.1, vitK: 0.3, vitB1: 0.2, vitB2: 0.1, niacin: 1.8, vitB6: 0.1, pantothenicAcid: 0.7, vitB12: 0, folate: 42, sodium: 15, potassium: 270, calcium: 2, phosphorus: 89, magnesium: 37, iron: 0.5, zinc: 0.5, copper: 0.1, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-258", name: "Mote trigo cocido", group: "Cereales y Derivados", sourceLink: "2",
        kcal: 131, protein: 3.5, carbs: 0, fats: 0.06,
        micros: { moisture: 65, ash: 0, sugars: 0, fiber: 0.4, saturatedFat: 0.05, monoFat: 0.16, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 17.6, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 1.7, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 0, folate: 18.3, sodium: 13.7, potassium: 144, calcium: 22.1, phosphorus: 127, magnesium: 66.4, iron: 0.8, zinc: 1.1, copper: 0.2, selenium: 19.1, alcohol: 0 }
    },
    {
        id: "alim-259", name: "Mote trigo", group: "Cereales y Derivados", sourceLink: "4",
        kcal: 354, protein: 10.5, carbs: 73.6, fats: 2,
        micros: { moisture: 0, ash: 0, sugars: 1.8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 143, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-260", name: "Quinoa(1)", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 368, protein: 14.1, carbs: 57.2, fats: 6.1,
        micros: { moisture: 13.3, ash: 2.4, sugars: 0, fiber: 7, saturatedFat: 0.71, monoFat: 1.61, polyFat: 3.29, transFat: 0, cholesterol: 0, vitA: 1, vitC: 0, vitD: 0, vitE: 2.4, vitK: 0, vitB1: 0.4, vitB2: 0.3, niacin: 1.5, vitB6: 0.5, pantothenicAcid: 0.8, vitB12: 0, folate: 184, sodium: 5, potassium: 563, calcium: 47, phosphorus: 457, magnesium: 197, iron: 4.6, zinc: 3.1, copper: 0.6, selenium: 8.5, alcohol: 0 }
    },
    {
        id: "alim-261", name: "Quinoa(2)", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 351, protein: 12.2, carbs: 65.6, fats: 4.4,
        micros: { moisture: 10.4, ash: 1.5, sugars: 0, fiber: 5.9, saturatedFat: 0.41, monoFat: 0.69, polyFat: 1.9, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 23, potassium: 442, calcium: 26, phosphorus: 0, magnesium: 133, iron: 5.1, zinc: 6.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-262", name: "Quinoa cocida", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 120, protein: 4.4, carbs: 18.5, fats: 1.9,
        micros: { moisture: 71.6, ash: 0.8, sugars: 0.9, fiber: 2.8, saturatedFat: 0.23, monoFat: 0.53, polyFat: 1.08, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.6, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0, vitB12: 0, folate: 42, sodium: 7, potassium: 172, calcium: 17, phosphorus: 152, magnesium: 64, iron: 1.5, zinc: 1.1, copper: 0.2, selenium: 2.8, alcohol: 0 }
    },
    {
        id: "alim-263", name: "Salvado de avena", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 246, protein: 17.3, carbs: 50.8, fats: 7,
        micros: { moisture: 6.6, ash: 2.9, sugars: 1.5, fiber: 15.4, saturatedFat: 1.33, monoFat: 2.38, polyFat: 2.77, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 1, vitK: 3.2, vitB1: 1.2, vitB2: 0.2, niacin: 0.9, vitB6: 0.2, pantothenicAcid: 1.5, vitB12: 0, folate: 52, sodium: 4, potassium: 566, calcium: 58, phosphorus: 734, magnesium: 235, iron: 5.4, zinc: 3.1, copper: 0.4, selenium: 45.2, alcohol: 0 }
    },
    {
        id: "alim-264", name: "Salvado de trigo", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 216, protein: 15.6, carbs: 21.7, fats: 4.3,
        micros: { moisture: 9.9, ash: 5.8, sugars: 0.4, fiber: 42.8, saturatedFat: 0.63, monoFat: 0.64, polyFat: 2.21, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 1.5, vitK: 1.9, vitB1: 0.5, vitB2: 0.6, niacin: 13.6, vitB6: 1.3, pantothenicAcid: 2.2, vitB12: 0, folate: 79, sodium: 2, potassium: 1182, calcium: 73, phosphorus: 1013, magnesium: 611, iron: 10.6, zinc: 7.3, copper: 1, selenium: 77.6, alcohol: 0 }
    },
    {
        id: "alim-265", name: "Avena", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 389, protein: 16.9, carbs: 55.7, fats: 6.9,
        micros: { moisture: 8.2, ash: 1.7, sugars: 0, fiber: 10.6, saturatedFat: 1.22, monoFat: 2.18, polyFat: 2.54, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0.8, vitB1: 0.1, vitB2: 1, niacin: 0.1, vitB6: 1.3, pantothenicAcid: 0, vitB12: 0, folate: 56, sodium: 2, potassium: 429, calcium: 54, phosphorus: 523, magnesium: 177, iron: 4.7, zinc: 4, copper: 0.6, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-266", name: "Cereal de maíz(1)", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 358, protein: 8.1, carbs: 79, fats: 1.1,
        micros: { moisture: 7.7, ash: 0.4, sugars: 23.9, fiber: 3.7, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 17.6, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-267", name: "Cereal de maíz(2)", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 357, protein: 7.5, carbs: 81, fats: 0.4,
        micros: { moisture: 3.8, ash: 4, sugars: 9.5, fiber: 3.3, saturatedFat: 0.12, monoFat: 0.07, polyFat: 0.2, transFat: 0, cholesterol: 0, vitA: 490, vitC: 21, vitD: 3.6, vitE: 0.1, vitK: 0, vitB1: 1.3, vitB2: 1.5, niacin: 17.9, vitB6: 1.8, pantothenicAcid: 0.2, vitB12: 5, folate: 357, sodium: 729, potassium: 168, calcium: 5, phosphorus: 102, magnesium: 39, iron: 28.9, zinc: 1, copper: 0.2, selenium: 8.3, alcohol: 0 }
    },
    {
        id: "alim-268", name: "Granola", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 442, protein: 11.4, carbs: 51.1, fats: 21.4,
        micros: { moisture: 3.2, ash: 1.5, sugars: 20.2, fiber: 11.5, saturatedFat: 4.54, monoFat: 10.27, polyFat: 2.98, transFat: 0.6, cholesterol: 3.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 44, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-269", name: "Burgol", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 364, protein: 10.4, carbs: 78, fats: 1.1,
        micros: { moisture: 9.3, ash: 1.2, sugars: 1.3, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 25, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-270", name: "Cuscús cocido", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 112, protein: 3.8, carbs: 21.8, fats: 0.2,
        micros: { moisture: 72.6, ash: 0.3, sugars: 0.1, fiber: 1.4, saturatedFat: 0.03, monoFat: 0.02, polyFat: 0.06, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.1, vitB1: 0.1, vitB2: 0, niacin: 1, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 15, sodium: 5, potassium: 58, calcium: 8, phosphorus: 22, magnesium: 8, iron: 0.4, zinc: 0.3, copper: 0, selenium: 27.5, alcohol: 0 }
    },
    {
        id: "alim-271", name: "Cuscús seco", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 376, protein: 12.8, carbs: 72.4, fats: 0.6,
        micros: { moisture: 8.6, ash: 0.6, sugars: 0, fiber: 5, saturatedFat: 0.12, monoFat: 0.09, polyFat: 0.25, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0.2, vitB1: 0.1, vitB2: 3.5, niacin: 0.1, vitB6: 1.2, pantothenicAcid: 0, vitB12: 0, folate: 20, sodium: 10, potassium: 166, calcium: 24, phosphorus: 170, magnesium: 44, iron: 1.1, zinc: 0.8, copper: 0.2, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-272", name: "Fideos", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 352, protein: 13.9, carbs: 64.2, fats: 2.9,
        micros: { moisture: 8.21, ash: 1.62, sugars: 2.7, fiber: 9.2, saturatedFat: 0.43, monoFat: 0.36, polyFat: 1.14, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.5, vitK: 1.4, vitB1: 0.4, vitB2: 0.2, niacin: 8.7, vitB6: 0.3, pantothenicAcid: 0.9, vitB12: 0, folate: 69, sodium: 6, potassium: 434, calcium: 29, phosphorus: 343, magnesium: 128, iron: 3.6, zinc: 3, copper: 0.5, selenium: 77.6, alcohol: 0 }
    },
    {
        id: "alim-273", name: "Fideos cocidos", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 149, protein: 6, carbs: 26.2, fats: 1.7,
        micros: { moisture: 61.8, ash: 0.4, sugars: 0.8, fiber: 3.9, saturatedFat: 0.24, monoFat: 0.18, polyFat: 0.57, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.2, vitK: 0.6, vitB1: 0.2, vitB2: 0.1, niacin: 3.1, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 21, sodium: 4, potassium: 96, calcium: 13, phosphorus: 127, magnesium: 54, iron: 1.7, zinc: 1.3, copper: 0.2, selenium: 36.3, alcohol: 0 }
    },
    {
        id: "alim-274", name: "Fideos de arroz cocido", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 108, protein: 1.8, carbs: 23, fats: 0.2,
        micros: { moisture: 73.8, ash: 0.2, sugars: 0, fiber: 1, saturatedFat: 0.02, monoFat: 0.03, polyFat: 0.02, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 1, sodium: 19, potassium: 4, calcium: 4, phosphorus: 20, magnesium: 3, iron: 0.1, zinc: 0.3, copper: 0, selenium: 4.5, alcohol: 0 }
    },
    {
        id: "alim-275", name: "Galleta champaña", group: "Cereales y Derivados", sourceLink: "4",
        kcal: 409, protein: 5.6, carbs: 81.7, fats: 6.6,
        micros: { moisture: 0, ash: 0, sugars: 49, fiber: 0, saturatedFat: 2.2, monoFat: 2.7, polyFat: 1.7, transFat: 0.1, cholesterol: 149, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 217, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-276", name: "Galleta cereal avena manzana", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 428, protein: 8.6, carbs: 56.1, fats: 17,
        micros: { moisture: 3.5, ash: 1.4, sugars: 0, fiber: 6.5, saturatedFat: 4.94, monoFat: 8.05, polyFat: 2.89, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 214, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-277", name: "Galleta cereal berries", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 430, protein: 8.5, carbs: 57.9, fats: 16.4,
        micros: { moisture: 3.7, ash: 1.3, sugars: 0, fiber: 5.1, saturatedFat: 4.92, monoFat: 7.69, polyFat: 2.79, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 184, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-278", name: "Galleta cereal cacao", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 427, protein: 8.3, carbs: 54.2, fats: 17.3,
        micros: { moisture: 2.8, ash: 1.5, sugars: 0, fiber: 6.9, saturatedFat: 4.97, monoFat: 8.27, polyFat: 3, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 198, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-279", name: "Galleta cereal clásica", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 430, protein: 7.6, carbs: 61.8, fats: 16.9,
        micros: { moisture: 4.4, ash: 1.6, sugars: 0, fiber: 7.7, saturatedFat: 5.08, monoFat: 7.73, polyFat: 3.1, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 209, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-280", name: "Galleta cereal fibra cacao", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 427, protein: 8.9, carbs: 54.8, fats: 19,
        micros: { moisture: 3.7, ash: 1.8, sugars: 0, fiber: 11.7, saturatedFat: 5.12, monoFat: 9.38, polyFat: 3.4, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 220, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-281", name: "Galleta chips de chocolate", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 481, protein: 5.4, carbs: 64.3, fats: 22.6,
        micros: { moisture: 4.1, ash: 1.1, sugars: 0, fiber: 2.5, saturatedFat: 7.48, monoFat: 11.67, polyFat: 2.37, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 9, sodium: 315, potassium: 135, calcium: 25, phosphorus: 108, magnesium: 31, iron: 1, zinc: 0.6, copper: 0.2, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-282", name: "Galleta chocolate", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 463, protein: 7.1, carbs: 66, fats: 18.9,
        micros: { moisture: 3.6, ash: 1.3, sugars: 0, fiber: 3.1, saturatedFat: 4.97, monoFat: 10.19, polyFat: 2.61, transFat: 0, cholesterol: 9.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 266, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-283", name: "Galleta de arroz(1)", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 363, protein: 6.7, carbs: 83.4, fats: 0.3,
        micros: { moisture: 5.5, ash: 0.4, sugars: 0, fiber: 3.7, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 152, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-284", name: "Galleta de arroz(2)", group: "Cereales y Derivados", sourceLink: "4",
        kcal: 373, protein: 5.2, carbs: 82.7, fats: 1.3,
        micros: { moisture: 0, ash: 0, sugars: 0.1, fiber: 3.2, saturatedFat: 0.5, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 120, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-285", name: "Galleta de arroz sésamo", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 371, protein: 7.5, carbs: 74.2, fats: 4.9,
        micros: { moisture: 4.9, ash: 2.8, sugars: 1.2, fiber: 5.7, saturatedFat: 1.25, monoFat: 1.48, polyFat: 1.43, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 665, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-286", name: "Galleta de arroz sin sal", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 363, protein: 7.7, carbs: 80.1, fats: 1.3,
        micros: { moisture: 5, ash: 1.3, sugars: 1.2, fiber: 4.6, saturatedFat: 0.24, monoFat: 0.45, polyFat: 0.4, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 18, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-287", name: "Galleta de arroz trigo avena", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 356, protein: 11, carbs: 72.2, fats: 2.6,
        micros: { moisture: 4.1, ash: 2.6, sugars: 2.6, fiber: 7.5, saturatedFat: 0.53, monoFat: 0.6, polyFat: 1.08, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 525, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-288", name: "Galleta de mantequilla", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 469, protein: 5.8, carbs: 71, fats: 18,
        micros: { moisture: 2.6, ash: 1, sugars: 0, fiber: 1.6, saturatedFat: 5.27, monoFat: 9.19, polyFat: 2.34, transFat: 0.1, cholesterol: 16.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 273, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-289", name: "Galleta mini cocaditas", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 483, protein: 5.4, carbs: 65.5, fats: 22.2,
        micros: { moisture: 2.1, ash: 0.8, sugars: 0, fiber: 4, saturatedFat: 11.97, monoFat: 6.88, polyFat: 2.05, transFat: 0, cholesterol: 8.2, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 162, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-290", name: "Galleta mini limón", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 467, protein: 7.3, carbs: 67.4, fats: 18.7,
        micros: { moisture: 2.9, ash: 1.4, sugars: 0, fiber: 2.2, saturatedFat: 4.93, monoFat: 9.69, polyFat: 2.91, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 322, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-291", name: "Galleta mini mantequilla", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 476, protein: 6.5, carbs: 67.4, fats: 20,
        micros: { moisture: 2.8, ash: 1.4, sugars: 0, fiber: 1.9, saturatedFat: 4.69, monoFat: 9.65, polyFat: 2.55, transFat: 0, cholesterol: 5.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 313, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-292", name: "Galleta mini vino", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 409, protein: 9.6, carbs: 59.5, fats: 13.7,
        micros: { moisture: 1.5, ash: 1.1, sugars: 0, fiber: 13.6, saturatedFat: 5.31, monoFat: 6.39, polyFat: 2.13, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 228, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-293", name: "Galleta soda", group: "Cereales y Derivados", sourceLink: "4",
        kcal: 428, protein: 9, carbs: 73.4, fats: 10.4,
        micros: { moisture: 0, ash: 0, sugars: 1.9, fiber: 0, saturatedFat: 4.6, monoFat: 3.4, polyFat: 1.5, transFat: 0.1, cholesterol: 1, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 720, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-294", name: "Galleta vainilla", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 453, protein: 8, carbs: 69.7, fats: 15.8,
        micros: { moisture: 3.6, ash: 0.7, sugars: 0, fiber: 2.2, saturatedFat: 6.13, monoFat: 4.36, polyFat: 1.25, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 98, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-295", name: "Galleta vino", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 405, protein: 7.4, carbs: 60.3, fats: 14.9,
        micros: { moisture: 1.6, ash: 1.2, sugars: 0, fiber: 14.6, saturatedFat: 5.32, monoFat: 6.46, polyFat: 2.2, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 235, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-296", name: "Galletas cracker", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 386, protein: 5.7, carbs: 72.3, fats: 5.7,
        micros: { moisture: 8, ash: 2.6, sugars: 22.9, fiber: 5.7, saturatedFat: 0, monoFat: 1.72, polyFat: 3.37, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.9, vitK: 2.5, vitB1: 0.5, vitB2: 0.2, niacin: 3.8, vitB6: 0.2, pantothenicAcid: 0, vitB12: 0, folate: 80, sodium: 629, potassium: 171, calcium: 429, phosphorus: 163, magnesium: 56, iron: 3.1, zinc: 1.2, copper: 0.2, selenium: 33.7, alcohol: 0 }
    },
    {
        id: "alim-297", name: "Galletas de agua", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 384, protein: 8, carbs: 71.1, fats: 9.4,
        micros: { moisture: 6.4, ash: 0, sugars: 0, fiber: 2.5, saturatedFat: 2.27, monoFat: 4.29, polyFat: 2.86, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.6, niacin: 3.5, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 0, folate: 12.9, sodium: 670, potassium: 384, calcium: 40, phosphorus: 149, magnesium: 42.9, iron: 3.5, zinc: 0.8, copper: 0.2, selenium: 11, alcohol: 0 }
    },
    {
        id: "alim-298", name: "Galletas de arroz", group: "Cereales y Derivados", sourceLink: "4",
        kcal: 363, protein: 8.4, carbs: 77, fats: 2.4,
        micros: { moisture: 0, ash: 0, sugars: 0.5, fiber: 5.5, saturatedFat: 0.5, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 228, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-299", name: "Harina de centeno", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 349, protein: 10.9, carbs: 63.6, fats: 1.5,
        micros: { moisture: 11, ash: 1.2, sugars: 1.1, fiber: 11.8, saturatedFat: 0.18, monoFat: 0.19, polyFat: 0.7, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 1.4, vitK: 5.9, vitB1: 0.3, vitB2: 0.1, niacin: 1.7, vitB6: 0.3, pantothenicAcid: 0.5, vitB12: 0, folate: 34, sodium: 2, potassium: 374, calcium: 24, phosphorus: 225, magnesium: 63, iron: 2.5, zinc: 2.2, copper: 0.3, selenium: 14.4, alcohol: 0 }
    },
    {
        id: "alim-300", name: "Harina de trigo", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 364, protein: 10.3, carbs: 73.6, fats: 1,
        micros: { moisture: 11.9, ash: 0.5, sugars: 0.3, fiber: 2.7, saturatedFat: 0.16, monoFat: 0.09, polyFat: 0.41, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.3, vitB1: 0.1, vitB2: 0, niacin: 1.3, vitB6: 0, pantothenicAcid: 0.4, vitB12: 0, folate: 26, sodium: 2, potassium: 107, calcium: 15, phosphorus: 108, magnesium: 22, iron: 1.2, zinc: 0.7, copper: 0.1, selenium: 33.9, alcohol: 0 }
    },
    {
        id: "alim-301", name: "Harina de yuca", group: "Cereales y Derivados", sourceLink: "3",
        kcal: 333, protein: 0.3, carbs: 82.7, fats: 0.1,
        micros: { moisture: 8.8, ash: 0.1, sugars: 0, fiber: 8, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 17, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-302", name: "Harina de trigo tostada", group: "Cereales y Derivados", sourceLink: "2",
        kcal: 380, protein: 13.4, carbs: 77.4, fats: 1.9,
        micros: { moisture: 4.7, ash: 1.7, sugars: 0, fiber: 0.9, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 0.3, niacin: 9.1, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 62, calcium: 292, phosphorus: 0, magnesium: 3.2, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-303", name: "Chuchoca", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 361, protein: 6.9, carbs: 69.6, fats: 3.9,
        micros: { moisture: 10.9, ash: 1.5, sugars: 0.6, fiber: 7.3, saturatedFat: 0.54, monoFat: 1.02, polyFat: 1.76, transFat: 0, cholesterol: 11, vitA: 0, vitC: 0, vitD: 0, vitE: 0.4, vitK: 0.3, vitB1: 0.2, vitB2: 0.1, niacin: 1.9, vitB6: 0.4, pantothenicAcid: 0.7, vitB12: 0, folate: 25, sodium: 5, potassium: 315, calcium: 7, phosphorus: 272, magnesium: 93, iron: 2.4, zinc: 1.7, copper: 0.2, selenium: 15.4, alcohol: 0 }
    },
    {
        id: "alim-304", name: "Chuño", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 351, protein: 8, carbs: 78.9, fats: 0.8,
        micros: { moisture: 7.6, ash: 3.7, sugars: 0.1, fiber: 1.1, saturatedFat: 0.21, monoFat: 0.02, polyFat: 0.35, transFat: 0, cholesterol: 0, vitA: 0, vitC: 19, vitD: 0, vitE: 0.2, vitK: 0, vitB1: 0.4, vitB2: 0.1, niacin: 3.4, vitB6: 0, pantothenicAcid: 1.5, vitB12: 0, folate: 50.6, sodium: 34, potassium: 1588, calcium: 33, phosphorus: 178, magnesium: 87.7, iron: 17.2, zinc: 1.6, copper: 1.1, selenium: 2.8, alcohol: 0 }
    },
    {
        id: "alim-305", name: "Maicena", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 381, protein: 0.3, carbs: 90.4, fats: 0.1,
        micros: { moisture: 8.3, ash: 0.1, sugars: 0, fiber: 0.9, saturatedFat: 0.01, monoFat: 0.02, polyFat: 0.03, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 9, sodium: 3, potassium: 2, calcium: 13, phosphorus: 3, magnesium: 0.5, iron: 0.1, zinc: 0.1, copper: 2.8, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-306", name: "Sémola(1)", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 360, protein: 12.7, carbs: 68.9, fats: 1.1,
        micros: { moisture: 12.7, ash: 0.8, sugars: 0, fiber: 3.9, saturatedFat: 0.15, monoFat: 0.12, polyFat: 0.43, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 0.1, niacin: 3.3, vitB6: 0.1, pantothenicAcid: 0.6, vitB12: 0, folate: 72, sodium: 1, potassium: 186, calcium: 17, phosphorus: 136, magnesium: 47, iron: 1.2, zinc: 1.1, copper: 0.2, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-307", name: "Sémola(2)", group: "Cereales y Derivados", sourceLink: "4",
        kcal: 342, protein: 12, carbs: 69, fats: 0.3,
        micros: { moisture: 0, ash: 0, sugars: 4, fiber: 2, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 5, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-308", name: "Tapioca", group: "Cereales y Derivados", sourceLink: "1",
        kcal: 358, protein: 0.2, carbs: 87.8, fats: 0,
        micros: { moisture: 11, ash: 0.1, sugars: 3.4, fiber: 0.9, saturatedFat: 0.01, monoFat: 0.01, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 4, sodium: 1, potassium: 11, calcium: 20, phosphorus: 7, magnesium: 1, iron: 1.6, zinc: 0.1, copper: 0, selenium: 0.8, alcohol: 0 }
    },
    {
        id: "alim-309", name: "Camote", group: "2.8 Papas", sourceLink: "6",
        kcal: 131, protein: 1.6, carbs: 30.2, fats: 0.4,
        micros: { moisture: 66.1, ash: 1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 41, potassium: 21, calcium: 0, phosphorus: 8, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-310", name: "Papa cocida", group: "2.8 Papas", sourceLink: "1",
        kcal: 89, protein: 2.3, carbs: 17.8, fats: 0.2,
        micros: { moisture: 76.7, ash: 1.3, sugars: 1.4, fiber: 1.8, saturatedFat: 0.03, monoFat: 0, polyFat: 0.04, transFat: 0, cholesterol: 1, vitA: 12.6, vitC: 0, vitD: 0, vitE: 0.1, vitK: 2.8, vitB1: 0.1, vitB2: 0.1, niacin: 1.6, vitB6: 0.2, pantothenicAcid: 0.3, vitB12: 0, folate: 27, sodium: 12, potassium: 545, calcium: 9, phosphorus: 72, magnesium: 28, iron: 0.7, zinc: 0.4, copper: 0.2, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-311", name: "Papa cruda", group: "2.8 Papas", sourceLink: "6",
        kcal: 80, protein: 3.1, carbs: 16.5, fats: 0.2,
        micros: { moisture: 78.7, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 27.8, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.1, niacin: 0, vitB6: 1.4, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0.1, potassium: 0, calcium: 1.4, phosphorus: 0, magnesium: 7, iron: 419, zinc: 11, copper: 41, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-312", name: "Papa entera rojiza", group: "2.8 Papas", sourceLink: "1",
        kcal: 79, protein: 2.1, carbs: 16.8, fats: 0.1,
        micros: { moisture: 78.6, ash: 1.1, sugars: 0.6, fiber: 1.4, saturatedFat: 0.03, monoFat: 0, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 0, vitC: 5.7, vitD: 0, vitE: 0, vitK: 1.8, vitB1: 0.1, vitB2: 0, niacin: 1, vitB6: 0.3, pantothenicAcid: 0.3, vitB12: 0, folate: 14, sodium: 5, potassium: 417, calcium: 13, phosphorus: 55, magnesium: 23, iron: 0.9, zinc: 0.3, copper: 0.1, selenium: 0.4, alcohol: 0 }
    },
    // Panginayon kadagiti Grasas y Aceites (Agregando Grasas y Aceites)
    {
        id: "alim-313", name: "Aceite de canola", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 884, protein: 0, carbs: 0, fats: 100,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 7.76, monoFat: 61.15, polyFat: 26.4, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 17.5, vitK: 71.3, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-314", name: "Aceite de coco", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 892, protein: 0, carbs: 0, fats: 99.1,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 82.48, monoFat: 6.33, polyFat: 1.7, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 0.6, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 1, calcium: 0, phosphorus: 0, magnesium: 0.1, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-315", name: "Aceite de maíz", group: "Grasas y Aceites", sourceLink: "2",
        kcal: 897, protein: 0, carbs: 0.3, fats: 99.7,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 13.6, monoFat: 26.1, polyFat: 59.9, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 83, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 1.8, calcium: 0, phosphorus: 0.9, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-316", name: "Aceite de maravilla(1)", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 884, protein: 0, carbs: 0, fats: 100,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 10.3, monoFat: 19.5, polyFat: 65.7, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 41.1, vitK: 5.4, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-317", name: "Aceite de maravilla(2)", group: "Grasas y Aceites", sourceLink: "3",
        kcal: 898, protein: 0, carbs: 0.2, fats: 99.8,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 7.98, monoFat: 25.07, polyFat: 43.5, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-318", name: "Aceite de maravilla(3)", group: "Grasas y Aceites", sourceLink: "2",
        kcal: 897, protein: 0, carbs: 0.3, fats: 99.7,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 11, monoFat: 19.7, polyFat: 69.3, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 47.7, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0.1, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0.2, iron: 0, zinc: 0, copper: 0, selenium: 0.3, alcohol: 0 }
    },
    {
        id: "alim-319", name: "Aceite de oliva", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 884, protein: 0, carbs: 0, fats: 100,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 13.81, monoFat: 72.96, polyFat: 10.52, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 14.4, vitK: 60.2, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 2, potassium: 1, calcium: 1, phosphorus: 0, magnesium: 0, iron: 0.6, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-320", name: "Aceite de oliva extra virgen", group: "Grasas y Aceites", sourceLink: "3",
        kcal: 887, protein: 0.2, carbs: 0, fats: 97.9,
        micros: { moisture: 0.3, ash: 0.2, sugars: 0, fiber: 0, saturatedFat: 12.13, monoFat: 73.5, polyFat: 6.59, transFat: 0, cholesterol: 5.2, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0.3, alcohol: 0 }
    },
    {
        id: "alim-321", name: "Aceite de palma", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 884, protein: 0, carbs: 0, fats: 100,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 49.3, monoFat: 37, polyFat: 9.3, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 15.9, vitK: 8, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-322", name: "Aceite de soja(1)", group: "Grasas y Aceites", sourceLink: "2",
        kcal: 897, protein: 0, carbs: 0.3, fats: 99.7,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 14.7, monoFat: 19.7, polyFat: 57.8, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 93.6, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0.3, iron: 0, zinc: 0, copper: 0.2, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-323", name: "Aceite de soja(2)", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 884, protein: 0, carbs: 0, fats: 100,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 14.9, monoFat: 43, polyFat: 37.6, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 8.1, vitK: 24.7, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-324", name: "Aceite palta orgánico", group: "Grasas y Aceites", sourceLink: "3",
        kcal: 897, protein: 0.4, carbs: 0, fats: 99.4,
        micros: { moisture: 0.1, ash: 0, sugars: 0, fiber: 0, saturatedFat: 14.69, monoFat: 57.04, polyFat: 11.1, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-325", name: "Crema ácida", group: "Grasas y Aceites", sourceLink: "2",
        kcal: 181, protein: 7, carbs: 7, fats: 14.1,
        micros: { moisture: 71, ash: 0.9, sugars: 0, fiber: 0, saturatedFat: 8.7, monoFat: 4.1, polyFat: 0.5, transFat: 0, cholesterol: 35, vitA: 119, vitC: 0.9, vitD: 0.3, vitE: 0.4, vitK: 0.7, vitB1: 0, vitB2: 0.2, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.3, vitB12: 11, folate: 70, sodium: 211, potassium: 141, calcium: 85, phosphorus: 11, magnesium: 0.1, iron: 0.3, zinc: 0, copper: 4.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-326", name: "Crema chantilly", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 345, protein: 2.1, carbs: 2.8, fats: 37,
        micros: { moisture: 0, ash: 0.5, sugars: 0, fiber: 0, saturatedFat: 23, monoFat: 10.7, polyFat: 1.37, transFat: 0, cholesterol: 137, vitA: 442, vitC: 0.6, vitD: 0, vitE: 0.6, vitK: 0, vitB1: 0, vitB2: 0.1, niacin: 0, vitB6: 0, pantothenicAcid: 0.3, vitB12: 0.2, folate: 3.8, sodium: 37.4, potassium: 75.2, calcium: 64.7, phosphorus: 62.6, magnesium: 7.1, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-327", name: "Crema de leche light", group: "Grasas y Aceites", sourceLink: "4",
        kcal: 194, protein: 2.7, carbs: 4.8, fats: 18.2,
        micros: { moisture: 73.7, ash: 0.6, sugars: 0, fiber: 0, saturatedFat: 11.65, monoFat: 5.48, polyFat: 1.04, transFat: 0, cholesterol: 32.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 3.3, copper: 0, selenium: 22, alcohol: 0 }
    },
    {
        id: "alim-328", name: "Grasa animal", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 897, protein: 0, carbs: 0, fats: 99.5,
        micros: { moisture: 0, ash: 0.5, sugars: 0, fiber: 0, saturatedFat: 39, monoFat: 44.87, polyFat: 11.14, transFat: 0, cholesterol: 95, vitA: 0, vitC: 0, vitD: 2.5, vitE: 0.6, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 150, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-329", name: "Manteca vegetal", group: "Grasas y Aceites", sourceLink: "2",
        kcal: 897, protein: 0, carbs: 0.3, fats: 99.7,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 22.43, monoFat: 56.63, polyFat: 20.64, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-330", name: "Mantequilla(1)", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 717, protein: 0.9, carbs: 0.1, fats: 81.1,
        micros: { moisture: 15.9, ash: 2.1, sugars: 0.1, fiber: 0, saturatedFat: 51.37, monoFat: 21.02, polyFat: 3.04, transFat: 0, cholesterol: 215, vitA: 684, vitC: 0, vitD: 0, vitE: 2.3, vitK: 7, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0.2, folate: 3, sodium: 643, potassium: 24, calcium: 24, phosphorus: 24, magnesium: 2, iron: 0, zinc: 0.1, copper: 0, selenium: 1, alcohol: 0 }
    },
    {
        id: "alim-331", name: "Mantequilla(2)", group: "Grasas y Aceites", sourceLink: "3",
        kcal: 749, protein: 0.3, carbs: 0, fats: 83.1,
        micros: { moisture: 15.3, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 46.99, monoFat: 27.51, polyFat: 1.14, transFat: 2.6, cholesterol: 187.1, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 563, potassium: 0, calcium: 9.2, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-332", name: "Margarina(1)", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 717, protein: 0.2, carbs: 0.7, fats: 80.7,
        micros: { moisture: 16.5, ash: 1.9, sugars: 0, fiber: 0, saturatedFat: 15.19, monoFat: 38.88, polyFat: 24.3, transFat: 0, cholesterol: 0, vitA: 819, vitC: 0.2, vitD: 0, vitE: 9, vitK: 93, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0.1, folate: 1, sodium: 751, potassium: 18, calcium: 3, phosphorus: 5, magnesium: 3, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-333", name: "Margarina(2)", group: "Grasas y Aceites", sourceLink: "3",
        kcal: 700, protein: 0.6, carbs: 0.2, fats: 77.4,
        micros: { moisture: 19.9, ash: 1.9, sugars: 0, fiber: 0, saturatedFat: 25.39, monoFat: 25.1, polyFat: 7.14, transFat: 0.4, cholesterol: 85, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 686, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-334", name: "Margarina reducida en grasa(1)", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 424, protein: 0.2, carbs: 0.9, fats: 47.5,
        micros: { moisture: 49.7, ash: 1.8, sugars: 0, fiber: 0, saturatedFat: 8.79, monoFat: 16.42, polyFat: 20.24, transFat: 0, cholesterol: 1, vitA: 0, vitC: 0, vitD: 3.9, vitE: 101.3, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 2, sodium: 646, potassium: 36, calcium: 4, phosphorus: 4, magnesium: 1, iron: 0.2, zinc: 0.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-335", name: "Margarina reducida en grasa(2)", group: "Grasas y Aceites", sourceLink: "4",
        kcal: 192, protein: 0, carbs: 0, fats: 21.3,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 5.8, monoFat: 4.5, polyFat: 11, transFat: 0.2, cholesterol: 0, vitA: 1200, vitC: 0, vitD: 7.2, vitE: 29, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 605, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-336", name: "Mayonesa", group: "Grasas y Aceites", sourceLink: "1",
        kcal: 717, protein: 1.1, carbs: 2.7, fats: 79.7,
        micros: { moisture: 15.3, ash: 0, sugars: 0, fiber: 0, saturatedFat: 11.8, monoFat: 22.7, polyFat: 41.3, transFat: 0, cholesterol: 59, vitA: 84.1, vitC: 0, vitD: 0, vitE: 58, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0.6, pantothenicAcid: 0.2, vitB12: 0.3, folate: 7.7, sodium: 568, potassium: 34, calcium: 18, phosphorus: 28, magnesium: 1, iron: 0.5, zinc: 0.2, copper: 0.3, selenium: 6, alcohol: 0 }
    },
    {
        id: "alim-337", name: "Mayonesa casera", group: "Grasas y Aceites", sourceLink: "3",
        kcal: 761, protein: 7.2, carbs: 1.8, fats: 70.6,
        micros: { moisture: 18.2, ash: 2.2, sugars: 0.2, fiber: 0, saturatedFat: 8.08, monoFat: 20.98, polyFat: 37.41, transFat: 0, cholesterol: 221, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 827, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Agregando nueva categoría: Verduras
    {
        id: "alim-338", name: "Acelga(1)", group: "Verduras", sourceLink: "3",
        kcal: 27, protein: 4.4, carbs: 2, fats: 0.2,
        micros: { moisture: 83.8, ash: 4.6, sugars: 0, fiber: 5, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-339", name: "Acelga cocida", group: "Verduras", sourceLink: "1",
        kcal: 20, protein: 1.9, carbs: 2, fats: 0.1,
        micros: { moisture: 92.7, ash: 0.3, sugars: 1.1, fiber: 2.1, saturatedFat: 0.01, monoFat: 0.02, polyFat: 0.03, transFat: 0, cholesterol: 0, vitA: 306, vitC: 18, vitD: 0, vitE: 1.9, vitK: 327.3, vitB1: 0, vitB2: 0.1, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 9, sodium: 179, potassium: 549, calcium: 58, phosphorus: 33, magnesium: 86, iron: 2.3, zinc: 0.3, copper: 0.2, selenium: 0.9, alcohol: 0 }
    },
    {
        id: "alim-340", name: "Acelga(2)", group: "Verduras", sourceLink: "1",
        kcal: 19, protein: 1.8, carbs: 2.1, fats: 0.2,
        micros: { moisture: 92.7, ash: 1.6, sugars: 1.1, fiber: 1.6, saturatedFat: 0.03, monoFat: 0.04, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 306, vitC: 30, vitD: 0, vitE: 1.9, vitK: 830, vitB1: 0, vitB2: 0.1, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 14, sodium: 213, potassium: 379, calcium: 51, phosphorus: 46, magnesium: 81, iron: 1.8, zinc: 0.4, copper: 0.2, selenium: 0.9, alcohol: 0 }
    },
    {
        id: "alim-341", name: "Achicoria", group: "Verduras", sourceLink: "1",
        kcal: 23, protein: 1.7, carbs: 0.7, fats: 0.3,
        micros: { moisture: 92, ash: 1.3, sugars: 0.7, fiber: 4, saturatedFat: 0.07, monoFat: 0.01, polyFat: 0.13, transFat: 0, cholesterol: 0, vitA: 286, vitC: 24, vitD: 0, vitE: 2.3, vitK: 297.6, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 1.2, vitB12: 0, folate: 110, sodium: 45, potassium: 420, calcium: 100, phosphorus: 47, magnesium: 30, iron: 0.9, zinc: 0.4, copper: 0.3, selenium: 0.3, alcohol: 0 }
    },
    {
        id: "alim-342", name: "Ajo", group: "Verduras", sourceLink: "1",
        kcal: 149, protein: 6.4, carbs: 31, fats: 0.5,
        micros: { moisture: 58.6, ash: 1.5, sugars: 1, fiber: 2.1, saturatedFat: 0.09, monoFat: 0.01, polyFat: 0.25, transFat: 0, cholesterol: 0, vitA: 0, vitC: 31.2, vitD: 0, vitE: 0.1, vitK: 1.7, vitB1: 0.2, vitB2: 0.1, niacin: 0.7, vitB6: 1.2, pantothenicAcid: 0.6, vitB12: 0, folate: 3, sodium: 17, potassium: 401, calcium: 181, phosphorus: 153, magnesium: 25, iron: 1.7, zinc: 1.2, copper: 0.3, selenium: 14.2, alcohol: 0 }
    },
    {
        id: "alim-343", name: "Alcachofa", group: "Verduras", sourceLink: "1",
        kcal: 53, protein: 2.9, carbs: 6.3, fats: 0.3,
        micros: { moisture: 84.1, ash: 0.7, sugars: 1, fiber: 5.7, saturatedFat: 0.08, monoFat: 0.01, polyFat: 0.15, transFat: 0, cholesterol: 0, vitA: 1, vitC: 7.4, vitD: 0, vitE: 0.2, vitK: 14.8, vitB1: 0.1, vitB2: 0.1, niacin: 1.1, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 89, sodium: 60, potassium: 286, calcium: 21, phosphorus: 73, magnesium: 42, iron: 0.6, zinc: 0.4, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-344", name: "Alfalfa brotes", group: "Verduras", sourceLink: "1",
        kcal: 23, protein: 4, carbs: 0.2, fats: 0.7,
        micros: { moisture: 92.8, ash: 0.4, sugars: 0.2, fiber: 1.9, saturatedFat: 0.07, monoFat: 0.06, polyFat: 0.41, transFat: 0, cholesterol: 0, vitA: 8, vitC: 8.2, vitD: 0, vitE: 0, vitK: 30.5, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0, pantothenicAcid: 0.6, vitB12: 0, folate: 36, sodium: 6, potassium: 79, calcium: 32, phosphorus: 70, magnesium: 27, iron: 1, zinc: 0.9, copper: 0.2, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-345", name: "Apio", group: "Verduras", sourceLink: "1",
        kcal: 16, protein: 0.7, carbs: 1.4, fats: 0.2,
        micros: { moisture: 95.4, ash: 0.8, sugars: 1.3, fiber: 1.6, saturatedFat: 0.04, monoFat: 0.03, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 22, vitC: 3.1, vitD: 0, vitE: 0.3, vitK: 29.3, vitB1: 0, vitB2: 0.1, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 36, sodium: 80, potassium: 260, calcium: 40, phosphorus: 24, magnesium: 11, iron: 0.2, zinc: 0.1, copper: 0, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-346", name: "Berenjena", group: "Verduras", sourceLink: "1",
        kcal: 35, protein: 0.8, carbs: 6.2, fats: 0.2,
        micros: { moisture: 89.7, ash: 0.5, sugars: 3.2, fiber: 2.5, saturatedFat: 0.04, monoFat: 0.02, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 2, vitC: 1.3, vitD: 0, vitE: 0.4, vitK: 2.9, vitB1: 0.1, vitB2: 0, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 14, sodium: 1, potassium: 123, calcium: 6, phosphorus: 15, magnesium: 11, iron: 0.3, zinc: 0.1, copper: 0.1, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-347", name: "Berro", group: "Verduras", sourceLink: "1",
        kcal: 11, protein: 2.3, carbs: 0.8, fats: 0.1,
        micros: { moisture: 95.1, ash: 1.2, sugars: 0.2, fiber: 0.5, saturatedFat: 0.03, monoFat: 0.01, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 160, vitC: 43, vitD: 0, vitE: 1, vitK: 250, vitB1: 0.1, vitB2: 0.1, niacin: 0.2, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 9, sodium: 41, potassium: 330, calcium: 120, phosphorus: 60, magnesium: 21, iron: 0.2, zinc: 0.1, copper: 0.1, selenium: 0.9, alcohol: 0 }
    },
    {
        id: "alim-348", name: "Betarraga", group: "Verduras", sourceLink: "1",
        kcal: 43, protein: 1.6, carbs: 6.8, fats: 0.2,
        micros: { moisture: 87.6, ash: 1.1, sugars: 6.8, fiber: 2.8, saturatedFat: 0.03, monoFat: 0.03, polyFat: 0.06, transFat: 0, cholesterol: 0, vitA: 2, vitC: 4.9, vitD: 0, vitE: 0, vitK: 0.2, vitB1: 0, vitB2: 0, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 109, sodium: 78, potassium: 325, calcium: 16, phosphorus: 40, magnesium: 23, iron: 0.8, zinc: 0.4, copper: 0.1, selenium: 0.7, alcohol: 0 }
    },
    {
        id: "alim-349", name: "Brócoli", group: "Verduras", sourceLink: "1",
        kcal: 28, protein: 3.1, carbs: 2.4, fats: 0.1,
        micros: { moisture: 90.7, ash: 0.7, sugars: 1.5, fiber: 3, saturatedFat: 0.02, monoFat: 0.01, polyFat: 0.06, transFat: 0, cholesterol: 0, vitA: 51, vitC: 40.1, vitD: 0, vitE: 1.3, vitK: 88.1, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 30, sodium: 24, potassium: 180, calcium: 51, phosphorus: 55, magnesium: 20, iron: 0.6, zinc: 0.3, copper: 0, selenium: 1.9, alcohol: 0 }
    },
    {
        id: "alim-350", name: "Cebolla", group: "Verduras", sourceLink: "1",
        kcal: 40, protein: 1.1, carbs: 7.6, fats: 0.1,
        micros: { moisture: 89.1, ash: 0.4, sugars: 4.2, fiber: 1.7, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0.02, transFat: 0, cholesterol: 0, vitA: 0, vitC: 7.4, vitD: 0, vitE: 0, vitK: 0.4, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 19, sodium: 4, potassium: 146, calcium: 23, phosphorus: 29, magnesium: 10, iron: 0.2, zinc: 0.2, copper: 0, selenium: 0.5, alcohol: 0 }
    },
    {
        id: "alim-351", name: "Cebollín", group: "Verduras", sourceLink: "1",
        kcal: 32, protein: 1.8, carbs: 4.7, fats: 0.2,
        micros: { moisture: 89.8, ash: 0.8, sugars: 2.3, fiber: 2.6, saturatedFat: 0.03, monoFat: 0.03, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 50, vitC: 18.8, vitD: 0, vitE: 0.6, vitK: 207, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 64, sodium: 16, potassium: 276, calcium: 72, phosphorus: 37, magnesium: 20, iron: 1.5, zinc: 0.4, copper: 0.1, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-352", name: "Champiñón blanco", group: "Verduras", sourceLink: "1",
        kcal: 22, protein: 3.1, carbs: 2.3, fats: 0.3,
        micros: { moisture: 92.5, ash: 0.9, sugars: 2, fiber: 1, saturatedFat: 0.05, monoFat: 0, polyFat: 0.15, transFat: 0, cholesterol: 0, vitA: 0, vitC: 2.1, vitD: 0.2, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.4, niacin: 3.6, vitB6: 0.1, pantothenicAcid: 1.5, vitB12: 0, folate: 17, sodium: 5, potassium: 318, calcium: 3, phosphorus: 86, magnesium: 9, iron: 0.5, zinc: 0.5, copper: 0.3, selenium: 9.3, alcohol: 0 }
    },
    {
        id: "alim-353", name: "Champiñón blanco cocido con sal", group: "Verduras", sourceLink: "1",
        kcal: 28, protein: 2.2, carbs: 3.1, fats: 0.5,
        micros: { moisture: 91.1, ash: 1, sugars: 2.3, fiber: 2.2, saturatedFat: 0.06, monoFat: 0.01, polyFat: 0.18, transFat: 0, cholesterol: 0, vitA: 0, vitC: 4, vitD: 0.2, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 4.5, vitB6: 0.1, pantothenicAcid: 2.2, vitB12: 0, folate: 18, sodium: 238, potassium: 356, calcium: 6, phosphorus: 87, magnesium: 12, iron: 1.7, zinc: 0.9, copper: 0.5, selenium: 13.4, alcohol: 0 }
    },
    {
        id: "alim-354", name: "Champiñón ostra", group: "Verduras", sourceLink: "1",
        kcal: 33, protein: 3.3, carbs: 3.8, fats: 0.4,
        micros: { moisture: 89.2, ash: 1, sugars: 1.1, fiber: 2.3, saturatedFat: 0.06, monoFat: 0.03, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 2, vitC: 0, vitD: 0.7, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 5, vitB6: 0.1, pantothenicAcid: 1.3, vitB12: 0, folate: 38, sodium: 18, potassium: 420, calcium: 3, phosphorus: 120, magnesium: 18, iron: 1.3, zinc: 0.8, copper: 0.2, selenium: 2.6, alcohol: 0 }
    },
    {
        id: "alim-355", name: "Champiñón portabella", group: "Verduras", sourceLink: "1",
        kcal: 22, protein: 2.1, carbs: 2.6, fats: 0.4,
        micros: { moisture: 92.8, ash: 0.9, sugars: 2.5, fiber: 1.3, saturatedFat: 0.06, monoFat: 0.02, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0.3, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 4.5, vitB6: 0.1, pantothenicAcid: 1.1, vitB12: 0.1, folate: 28, sodium: 9, potassium: 364, calcium: 3, phosphorus: 108, magnesium: 0, iron: 0.3, zinc: 0.5, copper: 0.3, selenium: 18.6, alcohol: 0 }
    },
    {
        id: "alim-356", name: "Champiñón shiitake", group: "Verduras", sourceLink: "1",
        kcal: 34, protein: 2.2, carbs: 4.3, fats: 0.5,
        micros: { moisture: 89.7, ash: 0.7, sugars: 2.4, fiber: 2.5, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0.4, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 3.9, vitB6: 0.3, pantothenicAcid: 1.5, vitB12: 0, folate: 13, sodium: 9, potassium: 304, calcium: 2, phosphorus: 112, magnesium: 20, iron: 0.4, zinc: 1, copper: 0.1, selenium: 5.7, alcohol: 0 }
    },
    {
        id: "alim-357", name: "Champiñón shiitake cocido con sal", group: "Verduras", sourceLink: "1",
        kcal: 56, protein: 1.6, carbs: 12.3, fats: 0.2,
        micros: { moisture: 83.5, ash: 0.4, sugars: 3.8, fiber: 2.1, saturatedFat: 0.05, monoFat: 0.07, polyFat: 0.03, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0.3, vitD: 0.7, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 1.5, vitB6: 0.2, pantothenicAcid: 3.6, vitB12: 0, folate: 21, sodium: 240, potassium: 117, calcium: 3, phosphorus: 29, magnesium: 14, iron: 0.4, zinc: 1.3, copper: 0.9, selenium: 24.8, alcohol: 0 }
    },
    {
        id: "alim-358", name: "Champiñones en conserva", group: "Verduras", sourceLink: "1",
        kcal: 25, protein: 1.9, carbs: 2.7, fats: 0.3,
        micros: { moisture: 91.1, ash: 1.7, sugars: 2.3, fiber: 2.4, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0.11, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0.2, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0, niacin: 1.6, vitB6: 0.1, pantothenicAcid: 0.8, vitB12: 0, folate: 12, sodium: 425, potassium: 129, calcium: 11, phosphorus: 66, magnesium: 15, iron: 0.8, zinc: 0.7, copper: 0.2, selenium: 4.1, alcohol: 0 }
    },
    {
        id: "alim-359", name: "Chochayuyo", group: "Verduras", sourceLink: "2",
        kcal: 56, protein: 1.7, carbs: 6.2, fats: 0.2,
        micros: { moisture: 80.7, ash: 4.3, sugars: 0, fiber: 6.9, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-360", name: "Coliflor", group: "Verduras", sourceLink: "1",
        kcal: 23, protein: 1.8, carbs: 1.8, fats: 0.5,
        micros: { moisture: 93, ash: 0.6, sugars: 2.1, fiber: 2.3, saturatedFat: 0.07, monoFat: 0.03, polyFat: 0.22, transFat: 0, cholesterol: 0, vitA: 1, vitC: 44.3, vitD: 0, vitE: 0.1, vitK: 13.8, vitB1: 0, vitB2: 0.1, niacin: 0.4, vitB6: 0.2, pantothenicAcid: 0.5, vitB12: 0, folate: 44, sodium: 15, potassium: 142, calcium: 16, phosphorus: 32, magnesium: 9, iron: 0.3, zinc: 0.2, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-361", name: "Endivia", group: "Verduras", sourceLink: "1",
        kcal: 17, protein: 1.3, carbs: 0.3, fats: 0.2,
        micros: { moisture: 93.8, ash: 1.4, sugars: 0.3, fiber: 3.1, saturatedFat: 0.05, monoFat: 0, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 108, vitC: 6.5, vitD: 0, vitE: 0.4, vitK: 231, vitB1: 0.1, vitB2: 0.1, niacin: 0.4, vitB6: 0, pantothenicAcid: 0.9, vitB12: 0, folate: 132, sodium: 22, potassium: 314, calcium: 52, phosphorus: 28, magnesium: 15, iron: 0.8, zinc: 0.8, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-362", name: "Espárrago", group: "Verduras", sourceLink: "1",
        kcal: 22, protein: 2.4, carbs: 2.1, fats: 0.2,
        micros: { moisture: 92.6, ash: 0.6, sugars: 1.3, fiber: 2, saturatedFat: 0.05, monoFat: 0, polyFat: 0.11, transFat: 0, cholesterol: 0, vitA: 50, vitC: 7.7, vitD: 0, vitE: 1.5, vitK: 50.6, vitB1: 0.2, vitB2: 0.1, niacin: 1.1, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 149, sodium: 14, potassium: 224, calcium: 23, phosphorus: 54, magnesium: 14, iron: 0.9, zinc: 0.6, copper: 0.2, selenium: 6.1, alcohol: 0 }
    },
    {
        id: "alim-363", name: "Espinaca cocida", group: "Verduras", sourceLink: "1",
        kcal: 23, protein: 3, carbs: 1.4, fats: 0.3,
        micros: { moisture: 91.2, ash: 1.8, sugars: 0.4, fiber: 2.4, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0.11, transFat: 0, cholesterol: 0, vitA: 524, vitC: 9.8, vitD: 0, vitE: 2.1, vitK: 493.6, vitB1: 0.1, vitB2: 0.2, niacin: 0.5, vitB6: 0.2, pantothenicAcid: 0.1, vitB12: 0, folate: 146, sodium: 70, potassium: 466, calcium: 136, phosphorus: 56, magnesium: 87, iron: 3.6, zinc: 0.8, copper: 0.2, selenium: 1.5, alcohol: 0 }
    },
    {
        id: "alim-364", name: "Espinaca", group: "Verduras", sourceLink: "1",
        kcal: 23, protein: 2.9, carbs: 1.4, fats: 0.4,
        micros: { moisture: 91.4, ash: 1.7, sugars: 0.4, fiber: 2.2, saturatedFat: 0.06, monoFat: 0.01, polyFat: 0.17, transFat: 0, cholesterol: 0, vitA: 469, vitC: 28.1, vitD: 0, vitE: 2, vitK: 482.9, vitB1: 0.1, vitB2: 0.2, niacin: 0.7, vitB6: 0.2, pantothenicAcid: 0.1, vitB12: 0, folate: 194, sodium: 79, potassium: 558, calcium: 99, phosphorus: 49, magnesium: 79, iron: 2.7, zinc: 0.5, copper: 0.1, selenium: 1, alcohol: 0 }
    },
    {
        id: "alim-365", name: "Hinojo bulbo", group: "Verduras", sourceLink: "1",
        kcal: 31, protein: 1.2, carbs: 4.2, fats: 0.2,
        micros: { moisture: 90.2, ash: 1.1, sugars: 3.9, fiber: 3.1, saturatedFat: 0.09, monoFat: 0.07, polyFat: 0.17, transFat: 0, cholesterol: 0, vitA: 48, vitC: 12, vitD: 0, vitE: 0.6, vitK: 62.8, vitB1: 0, vitB2: 0, niacin: 0.6, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 27, sodium: 52, potassium: 414, calcium: 49, phosphorus: 50, magnesium: 17, iron: 0.7, zinc: 0.2, copper: 0.1, selenium: 0.7, alcohol: 0 }
    },
    {
        id: "alim-366", name: "Lechuga", group: "Verduras", sourceLink: "1",
        kcal: 13, protein: 1.4, carbs: 1.1, fats: 0.2,
        micros: { moisture: 95.6, ash: 0.6, sugars: 0.9, fiber: 1.1, saturatedFat: 0.03, monoFat: 0.01, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 166, vitC: 3.7, vitD: 0, vitE: 0.2, vitK: 102.3, vitB1: 0.1, vitB2: 0.1, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 73, sodium: 5, potassium: 238, calcium: 35, phosphorus: 33, magnesium: 13, iron: 1.2, zinc: 0.2, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-367", name: "Lechuga escarola", group: "Verduras", sourceLink: "3",
        kcal: 14, protein: 0.7, carbs: 1.3, fats: 0.7,
        micros: { moisture: 97.1, ash: 0.2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 22, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-368", name: "Lechuga roja", group: "Verduras", sourceLink: "1",
        kcal: 16, protein: 1.3, carbs: 1.4, fats: 0.2,
        micros: { moisture: 95.6, ash: 0.6, sugars: 0.5, fiber: 0.9, saturatedFat: 0.02, monoFat: 0.01, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 375, vitC: 3.7, vitD: 0, vitE: 0.2, vitK: 140.3, vitB1: 0.1, vitB2: 0.1, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 36, sodium: 25, potassium: 187, calcium: 33, phosphorus: 28, magnesium: 12, iron: 1.2, zinc: 0.2, copper: 0, selenium: 1.5, alcohol: 0 }
    },
    {
        id: "alim-369", name: "Luche", group: "Verduras", sourceLink: "2",
        kcal: 37, protein: 3.3, carbs: 0, fats: 0.7,
        micros: { moisture: 86, ash: 3.4, sugars: 0, fiber: 8.8, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-370", name: "Luche ahumado", group: "Verduras", sourceLink: "3",
        kcal: 157, protein: 23.9, carbs: 15.1, fats: 0.1,
        micros: { moisture: 11.1, ash: 8.2, sugars: 0.1, fiber: 41.6, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0.7, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 357, potassium: 0, calcium: 154, phosphorus: 295, magnesium: 372, iron: 36, zinc: 1.5, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-371", name: "Nabos", group: "Verduras", sourceLink: "1",
        kcal: 28, protein: 0.9, carbs: 4.6, fats: 0.1,
        micros: { moisture: 91.9, ash: 0.7, sugars: 3.8, fiber: 1.8, saturatedFat: 0.01, monoFat: 0.01, polyFat: 0.05, transFat: 0, cholesterol: 0, vitA: 0, vitC: 21, vitD: 0, vitE: 0, vitK: 0.1, vitB1: 0, vitB2: 0, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 15, sodium: 67, potassium: 191, calcium: 30, phosphorus: 27, magnesium: 11, iron: 0.3, zinc: 0.3, copper: 0.1, selenium: 0.7, alcohol: 0 }
    },
    {
        id: "alim-372", name: "Penca", group: "Verduras", sourceLink: "2",
        kcal: 21, protein: 4.4, carbs: 0, fats: 0,
        micros: { moisture: 92.1, ash: 0.4, sugars: 0, fiber: 0.2, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 180, potassium: 10, calcium: 0, phosphorus: 2.1, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-373", name: "Pepino", group: "Verduras", sourceLink: "1",
        kcal: 12, protein: 0.6, carbs: 1.5, fats: 0.2,
        micros: { moisture: 96.7, ash: 0.4, sugars: 1.4, fiber: 0.7, saturatedFat: 0.01, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 4, vitC: 3.2, vitD: 0, vitE: 0, vitK: 7.2, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 14, sodium: 2, potassium: 136, calcium: 14, phosphorus: 21, magnesium: 12, iron: 0.2, zinc: 0.2, copper: 0.1, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-374", name: "Pepinillos en conserva", group: "Verduras", sourceLink: "1",
        kcal: 12, protein: 0.5, carbs: 1.4, fats: 0.3,
        micros: { moisture: 94.3, ash: 2.5, sugars: 1.1, fiber: 1, saturatedFat: 0.08, monoFat: 0.01, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 6, vitC: 2.3, vitD: 0, vitE: 0, vitK: 17.3, vitB1: 0, vitB2: 0.1, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 8, sodium: 809, potassium: 117, calcium: 57, phosphorus: 16, magnesium: 7, iron: 0.3, zinc: 0.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-375", name: "Pickles", group: "Verduras", sourceLink: "1",
        kcal: 67, protein: 0.9, carbs: 16.3, fats: 0.2,
        micros: { moisture: 79, ash: 0, sugars: 0, fiber: 1.3, saturatedFat: 0.04, monoFat: 0, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 14, vitC: 6.7, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 670, potassium: 66.7, calcium: 10, phosphorus: 20, magnesium: 6, iron: 0.7, zinc: 0, copper: 0.1, selenium: 1.1, alcohol: 0 }
    },
    {
        id: "alim-376", name: "Pimentón rojo", group: "Verduras", sourceLink: "1",
        kcal: 31, protein: 1, carbs: 3.9, fats: 0.3,
        micros: { moisture: 92.2, ash: 0.5, sugars: 4.2, fiber: 2.1, saturatedFat: 0.03, monoFat: 0, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 157, vitC: 127.7, vitD: 0, vitE: 1.6, vitK: 4.9, vitB1: 0.1, vitB2: 0.1, niacin: 1, vitB6: 0.3, pantothenicAcid: 0.3, vitB12: 0, folate: 46, sodium: 4, potassium: 211, calcium: 7, phosphorus: 26, magnesium: 12, iron: 0.4, zinc: 0.3, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-377", name: "Pimentón verde", group: "Verduras", sourceLink: "1",
        kcal: 20, protein: 0.9, carbs: 2.9, fats: 0.2,
        micros: { moisture: 93.9, ash: 0.4, sugars: 2.4, fiber: 1.7, saturatedFat: 0.06, monoFat: 0.01, polyFat: 0.06, transFat: 0, cholesterol: 0, vitA: 18, vitC: 80.4, vitD: 0, vitE: 0.4, vitK: 7.4, vitB1: 0.1, vitB2: 0, niacin: 0.5, vitB6: 0.2, pantothenicAcid: 0.1, vitB12: 0, folate: 10, sodium: 3, potassium: 175, calcium: 10, phosphorus: 20, magnesium: 10, iron: 0.3, zinc: 0.1, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-378", name: "Poroto verde enlatado", group: "Verduras", sourceLink: "1",
        kcal: 21, protein: 1.1, carbs: 2.3, fats: 0.4,
        micros: { moisture: 93.5, ash: 0.8, sugars: 1.4, fiber: 1.9, saturatedFat: 0.09, monoFat: 0.02, polyFat: 0.21, transFat: 0, cholesterol: 0, vitA: 18, vitC: 2.8, vitD: 0, vitE: 0, vitK: 38.9, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 24, sodium: 268, potassium: 96, calcium: 37, phosphorus: 22, magnesium: 13, iron: 0.9, zinc: 0.2, copper: 0, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-379", name: "Porotos verdes", group: "Verduras", sourceLink: "1",
        kcal: 35, protein: 1.9, carbs: 4.7, fats: 0.3,
        micros: { moisture: 89.2, ash: 0.7, sugars: 3.6, fiber: 3.2, saturatedFat: 0.06, monoFat: 0.01, polyFat: 0.15, transFat: 0, cholesterol: 0, vitA: 32, vitC: 9.7, vitD: 0, vitE: 0.5, vitK: 47.9, vitB1: 0.1, vitB2: 0.1, niacin: 0.6, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 33, sodium: 1, potassium: 146, calcium: 44, phosphorus: 29, magnesium: 18, iron: 0.7, zinc: 0.3, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-380", name: "Puerro", group: "Verduras", sourceLink: "1",
        kcal: 61, protein: 1.5, carbs: 12.4, fats: 0.3,
        micros: { moisture: 83, ash: 1.1, sugars: 3.9, fiber: 1.8, saturatedFat: 0.04, monoFat: 0, polyFat: 0.17, transFat: 0, cholesterol: 0, vitA: 83, vitC: 12, vitD: 0, vitE: 0.9, vitK: 47, vitB1: 0.1, vitB2: 0, niacin: 0.4, vitB6: 0.2, pantothenicAcid: 0.1, vitB12: 0, folate: 64, sodium: 20, potassium: 180, calcium: 59, phosphorus: 35, magnesium: 28, iron: 2.1, zinc: 0.1, copper: 0.1, selenium: 1, alcohol: 0 }
    },
    {
        id: "alim-381", name: "Rabanito", group: "Verduras", sourceLink: "1",
        kcal: 16, protein: 0.7, carbs: 1.8, fats: 0.1,
        micros: { moisture: 95.3, ash: 0.6, sugars: 1.9, fiber: 1.6, saturatedFat: 0.03, monoFat: 0.02, polyFat: 0.05, transFat: 0, cholesterol: 0, vitA: 0, vitC: 14.8, vitD: 0, vitE: 0, vitK: 1.3, vitB1: 0, vitB2: 0, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 25, sodium: 39, potassium: 233, calcium: 25, phosphorus: 20, magnesium: 10, iron: 0.3, zinc: 0.3, copper: 0.1, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-382", name: "Repollitos de bruselas", group: "Verduras", sourceLink: "1",
        kcal: 36, protein: 2.6, carbs: 4.5, fats: 0.5,
        micros: { moisture: 88.9, ash: 1, sugars: 1.7, fiber: 2.6, saturatedFat: 0.1, monoFat: 0.04, polyFat: 0.26, transFat: 0, cholesterol: 0, vitA: 39, vitC: 62, vitD: 0, vitE: 0.4, vitK: 140.3, vitB1: 0.1, vitB2: 0.1, niacin: 0.6, vitB6: 0.2, pantothenicAcid: 0.3, vitB12: 0, folate: 60, sodium: 21, potassium: 317, calcium: 36, phosphorus: 56, magnesium: 20, iron: 1.2, zinc: 0.3, copper: 0.1, selenium: 1.5, alcohol: 0 }
    },
    {
        id: "alim-383", name: "Repollitos de bruselas cocido con sal", group: "Verduras", sourceLink: "1",
        kcal: 42, protein: 3.6, carbs: 4.2, fats: 0.4,
        micros: { moisture: 86.7, ash: 0.9, sugars: 2.1, fiber: 4.1, saturatedFat: 0.08, monoFat: 0.03, polyFat: 0.2, transFat: 0, cholesterol: 0, vitA: 46, vitC: 45.7, vitD: 0, vitE: 0.5, vitK: 193.5, vitB1: 0.1, vitB2: 0.1, niacin: 0.5, vitB6: 0.2, pantothenicAcid: 0.2, vitB12: 0, folate: 101, sodium: 259, potassium: 290, calcium: 26, phosphorus: 56, magnesium: 18, iron: 0.5, zinc: 0.2, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-384", name: "Repollo", group: "Verduras", sourceLink: "1",
        kcal: 25, protein: 1.3, carbs: 3.3, fats: 0.1,
        micros: { moisture: 92.2, ash: 0.6, sugars: 3.2, fiber: 2.5, saturatedFat: 0.03, monoFat: 0.02, polyFat: 0.02, transFat: 0, cholesterol: 0, vitA: 5, vitC: 36.6, vitD: 0, vitE: 0.2, vitK: 76, vitB1: 0.1, vitB2: 0, niacin: 0.2, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 43, sodium: 18, potassium: 170, calcium: 40, phosphorus: 26, magnesium: 12, iron: 0.5, zinc: 0.2, copper: 0, selenium: 0.3, alcohol: 0 }
    },
    {
        id: "alim-385", name: "Repollo morado", group: "Verduras", sourceLink: "1",
        kcal: 31, protein: 1.4, carbs: 5.3, fats: 0.2,
        micros: { moisture: 90.4, ash: 0.6, sugars: 3.8, fiber: 2.1, saturatedFat: 0.02, monoFat: 0.01, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 56, vitC: 57, vitD: 0, vitE: 0.1, vitK: 38.2, vitB1: 0.1, vitB2: 0.1, niacin: 0.4, vitB6: 0.2, pantothenicAcid: 0.1, vitB12: 0, folate: 18, sodium: 27, potassium: 243, calcium: 45, phosphorus: 30, magnesium: 16, iron: 0.8, zinc: 0.2, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-386", name: "Tomate", group: "Verduras", sourceLink: "1",
        kcal: 18, protein: 0.9, carbs: 2.7, fats: 0.2,
        micros: { moisture: 94.5, ash: 0.5, sugars: 2.6, fiber: 1.2, saturatedFat: 0.03, monoFat: 0.03, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 42, vitC: 13.7, vitD: 0, vitE: 0.5, vitK: 7.9, vitB1: 0, vitB2: 0, niacin: 0.6, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 15, sodium: 5, potassium: 237, calcium: 10, phosphorus: 24, magnesium: 11, iron: 0.3, zinc: 0.2, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-387", name: "Ulte", group: "Verduras", sourceLink: "2",
        kcal: 29, protein: 1.5, carbs: 4.7, fats: 0.4,
        micros: { moisture: 82.7, ash: 4.3, sugars: 0, fiber: 6.4, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-388", name: "Zanahoria(1)", group: "Verduras", sourceLink: "1",
        kcal: 35, protein: 0.8, carbs: 5.2, fats: 0.2,
        micros: { moisture: 90.2, ash: 0.7, sugars: 3.5, fiber: 3, saturatedFat: 0.03, monoFat: 0.01, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 852, vitC: 3.6, vitD: 0, vitE: 1, vitK: 13.7, vitB1: 0.1, vitB2: 0, niacin: 0.6, vitB6: 0.2, pantothenicAcid: 0.2, vitB12: 0, folate: 14, sodium: 58, potassium: 235, calcium: 30, phosphorus: 30, magnesium: 10, iron: 0.3, zinc: 0.2, copper: 0, selenium: 0.7, alcohol: 0 }
    },
    {
        id: "alim-389", name: "Zanahoria(2)", group: "Verduras", sourceLink: "1",
        kcal: 41, protein: 0.9, carbs: 6.8, fats: 0.2,
        micros: { moisture: 88.3, ash: 1, sugars: 4.7, fiber: 2.8, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 835, vitC: 5.9, vitD: 0, vitE: 0.7, vitK: 13.2, vitB1: 0.1, vitB2: 0.1, niacin: 1, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 19, sodium: 69, potassium: 320, calcium: 33, phosphorus: 35, magnesium: 12, iron: 0.3, zinc: 0.2, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-390", name: "Zapallo italiano", group: "Verduras", sourceLink: "1",
        kcal: 17, protein: 1.2, carbs: 2.1, fats: 0.3,
        micros: { moisture: 94.8, ash: 0.6, sugars: 2.5, fiber: 1, saturatedFat: 0.08, monoFat: 0.01, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 10, vitC: 17.9, vitD: 0, vitE: 0.1, vitK: 4.3, vitB1: 0, vitB2: 0.1, niacin: 0.5, vitB6: 0.2, pantothenicAcid: 0.2, vitB12: 0, folate: 24, sodium: 8, potassium: 261, calcium: 16, phosphorus: 38, magnesium: 18, iron: 0.4, zinc: 0.3, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-391", name: "Zapallo italianos cocido con sal", group: "Verduras", sourceLink: "1",
        kcal: 15, protein: 1.1, carbs: 1.7, fats: 0.4,
        micros: { moisture: 95.2, ash: 0.6, sugars: 1.7, fiber: 1, saturatedFat: 0.07, monoFat: 0.03, polyFat: 0.15, transFat: 0, cholesterol: 0, vitA: 56, vitC: 12.9, vitD: 0, vitE: 0.1, vitK: 4.2, vitB1: 0, vitB2: 0, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 28, sodium: 239, potassium: 264, calcium: 18, phosphorus: 37, magnesium: 19, iron: 0.4, zinc: 0.3, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-392", name: "Zapallo", group: "Verduras", sourceLink: "1",
        kcal: 20, protein: 0.7, carbs: 3.8, fats: 0.1,
        micros: { moisture: 93.7, ash: 0.6, sugars: 2.1, fiber: 1.1, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 288, vitC: 4.7, vitD: 0, vitE: 0.8, vitK: 0.8, vitB1: 0, vitB2: 0.1, niacin: 0.4, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 9, sodium: 1, potassium: 230, calcium: 15, phosphorus: 30, magnesium: 9, iron: 0.6, zinc: 0.2, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    // Panginayon kadagiti Frutas (Agregando Frutas)
    {
        id: "alim-393", name: "Aceitunas negras", group: "Frutas", sourceLink: "4",
        kcal: 232, protein: 1.1, carbs: 2.1, fats: 24.4,
        micros: { moisture: 0, ash: 0, sugars: 1.4, fiber: 0, saturatedFat: 2.69, monoFat: 17.68, polyFat: 1.54, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1588, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-394", name: "Aceitunas verdes", group: "Frutas", sourceLink: "4",
        kcal: 263, protein: 1.2, carbs: 3.1, fats: 27.3,
        micros: { moisture: 0, ash: 0, sugars: 1.4, fiber: 0, saturatedFat: 3.61, monoFat: 20.1, polyFat: 2.06, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1508, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-395", name: "Arándanos azul", group: "Frutas", sourceLink: "1",
        kcal: 57, protein: 0.7, carbs: 12.1, fats: 0.3,
        micros: { moisture: 84.2, ash: 0.2, sugars: 10, fiber: 2.4, saturatedFat: 0.03, monoFat: 0.05, polyFat: 0.15, transFat: 0, cholesterol: 0, vitA: 3, vitC: 9.7, vitD: 0, vitE: 0.6, vitK: 19.3, vitB1: 0, vitB2: 0, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 6, sodium: 1, potassium: 77, calcium: 6, phosphorus: 12, magnesium: 6, iron: 0.3, zinc: 0.2, copper: 0.1, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-396", name: "Arándanos rojo", group: "Frutas", sourceLink: "1",
        kcal: 46, protein: 0.5, carbs: 8.4, fats: 0.1,
        micros: { moisture: 87.3, ash: 0.1, sugars: 4.3, fiber: 3.6, saturatedFat: 0.01, monoFat: 0.02, polyFat: 0.06, transFat: 0, cholesterol: 0, vitA: 3, vitC: 14, vitD: 0, vitE: 1.3, vitK: 5, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 1, sodium: 2, potassium: 80, calcium: 8, phosphorus: 11, magnesium: 6, iron: 0.2, zinc: 0.1, copper: 0.1, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-397", name: "Caqui", group: "Frutas", sourceLink: "1",
        kcal: 70, protein: 0.6, carbs: 16.8, fats: 0.2,
        micros: { moisture: 80.3, ash: 0.3, sugars: 0, fiber: 1.8, saturatedFat: 0.01, monoFat: 0.02, polyFat: 0.1, transFat: 0, cholesterol: 0, vitA: 217, vitC: 7.5, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 7.5, sodium: 1, potassium: 161, calcium: 8, phosphorus: 17, magnesium: 9, iron: 0.2, zinc: 0.1, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-398", name: "Cerezas", group: "Frutas", sourceLink: "1",
        kcal: 50, protein: 1, carbs: 10.6, fats: 0.3,
        micros: { moisture: 86.1, ash: 0.4, sugars: 8.5, fiber: 1.6, saturatedFat: 0.07, monoFat: 0.08, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 64, vitC: 10, vitD: 0, vitE: 0.1, vitK: 2.1, vitB1: 0, vitB2: 0, niacin: 0.4, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 8, sodium: 3, potassium: 173, calcium: 16, phosphorus: 15, magnesium: 9, iron: 0.3, zinc: 0.1, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-399", name: "Chirimoya", group: "Frutas", sourceLink: "1",
        kcal: 75, protein: 1.6, carbs: 14.7, fats: 0.7,
        micros: { moisture: 79.4, ash: 0.7, sugars: 12.9, fiber: 3, saturatedFat: 0.23, monoFat: 0.06, polyFat: 0.19, transFat: 0, cholesterol: 0, vitA: 0, vitC: 12.6, vitD: 0, vitE: 0.3, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0.6, vitB6: 0.3, pantothenicAcid: 0.3, vitB12: 0, folate: 23, sodium: 7, potassium: 287, calcium: 10, phosphorus: 26, magnesium: 17, iron: 0.3, zinc: 0.2, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-400", name: "Ciruelas", group: "Frutas", sourceLink: "1",
        kcal: 46, protein: 0.7, carbs: 10, fats: 0.3,
        micros: { moisture: 87.2, ash: 0.4, sugars: 9.9, fiber: 1.4, saturatedFat: 0.02, monoFat: 0.13, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 17, vitC: 9.5, vitD: 0, vitE: 0.3, vitK: 6.4, vitB1: 0, vitB2: 0, niacin: 0.4, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 5, sodium: 0, potassium: 157, calcium: 6, phosphorus: 16, magnesium: 7, iron: 0.2, zinc: 0.1, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-401", name: "Ciruelas desecadas", group: "Frutas", sourceLink: "1",
        kcal: 240, protein: 2.2, carbs: 56.8, fats: 0.4,
        micros: { moisture: 30.9, ash: 2.6, sugars: 38.1, fiber: 7.1, saturatedFat: 0.09, monoFat: 0.05, polyFat: 0.06, transFat: 0, cholesterol: 0, vitA: 39, vitC: 0.6, vitD: 0, vitE: 0.4, vitK: 59.5, vitB1: 0.1, vitB2: 0.2, niacin: 1.9, vitB6: 0.2, pantothenicAcid: 0.4, vitB12: 0, folate: 4, sodium: 2, potassium: 732, calcium: 43, phosphorus: 69, magnesium: 41, iron: 0.9, zinc: 0.4, copper: 0.3, selenium: 0.3, alcohol: 0 }
    },
    {
        id: "alim-402", name: "Clementinas", group: "Frutas", sourceLink: "1",
        kcal: 47, protein: 0.9, carbs: 10.3, fats: 0.2,
        micros: { moisture: 86.6, ash: 0.4, sugars: 9.2, fiber: 1.7, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 48.8, vitC: 0, vitD: 0.2, vitE: 0, vitK: 0.1, vitB1: 0, vitB2: 0.6, niacin: 0.1, vitB6: 0.2, pantothenicAcid: 0, vitB12: 0, folate: 24, sodium: 1, potassium: 188, calcium: 30, phosphorus: 21, magnesium: 10, iron: 0.1, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-403", name: "Damasco", group: "Frutas", sourceLink: "1",
        kcal: 48, protein: 1.4, carbs: 9.1, fats: 0.4,
        micros: { moisture: 86.4, ash: 0.8, sugars: 9.2, fiber: 2, saturatedFat: 0.03, monoFat: 0.17, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 96, vitC: 10, vitD: 0, vitE: 0.9, vitK: 3.3, vitB1: 0, vitB2: 0, niacin: 0.6, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 9, sodium: 1, potassium: 259, calcium: 13, phosphorus: 23, magnesium: 10, iron: 0.4, zinc: 0.2, copper: 0.1, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-404", name: "Damascos secos", group: "Frutas", sourceLink: "3",
        kcal: 244, protein: 4.6, carbs: 56.1, fats: 0.1,
        micros: { moisture: 24.2, ash: 5.9, sugars: 12.8, fiber: 9.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 347, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 63, phosphorus: 0, magnesium: 0, iron: 0, zinc: 1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-405", name: "Durazno", group: "Frutas", sourceLink: "1",
        kcal: 39, protein: 0.9, carbs: 8, fats: 0.3,
        micros: { moisture: 88.9, ash: 0.4, sugars: 8.4, fiber: 1.5, saturatedFat: 0.02, monoFat: 0.07, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 16, vitC: 6.6, vitD: 0, vitE: 0.7, vitK: 2.6, vitB1: 0, vitB2: 0, niacin: 0.8, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 4, sodium: 0, potassium: 190, calcium: 6, phosphorus: 20, magnesium: 9, iron: 0.3, zinc: 0.2, copper: 0.1, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-406", name: "Duraznos en conserva", group: "Frutas", sourceLink: "4",
        kcal: 45, protein: 0.6, carbs: 10, fats: 0.3,
        micros: { moisture: 0, ash: 0, sugars: 10, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 10, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-407", name: "Frambuesa", group: "Frutas", sourceLink: "1",
        kcal: 52, protein: 1.2, carbs: 5.4, fats: 0.7,
        micros: { moisture: 85.8, ash: 0.5, sugars: 4.4, fiber: 6.5, saturatedFat: 0.02, monoFat: 0.06, polyFat: 0.38, transFat: 0, cholesterol: 0, vitA: 2, vitC: 26.2, vitD: 0, vitE: 0.9, vitK: 7.8, vitB1: 0, vitB2: 0, niacin: 0.6, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 21, sodium: 1, potassium: 151, calcium: 25, phosphorus: 29, magnesium: 22, iron: 0.7, zinc: 0.4, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-408", name: "Frutilla", group: "Frutas", sourceLink: "1",
        kcal: 32, protein: 0.7, carbs: 5.7, fats: 0.3,
        micros: { moisture: 91, ash: 0.4, sugars: 4.9, fiber: 2, saturatedFat: 0.02, monoFat: 0.04, polyFat: 0.16, transFat: 0, cholesterol: 0, vitA: 1, vitC: 58.8, vitD: 0, vitE: 0.3, vitK: 2.2, vitB1: 0, vitB2: 0, niacin: 0.4, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 24, sodium: 1, potassium: 153, calcium: 16, phosphorus: 24, magnesium: 13, iron: 0.4, zinc: 0.1, copper: 0, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-409", name: "Granada", group: "Frutas", sourceLink: "1",
        kcal: 83, protein: 1.7, carbs: 14.7, fats: 1.2,
        micros: { moisture: 77.9, ash: 0.5, sugars: 13.7, fiber: 4, saturatedFat: 0.12, monoFat: 0.09, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 0, vitC: 10.2, vitD: 0, vitE: 0.6, vitK: 16.4, vitB1: 0.1, vitB2: 0.1, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 38, sodium: 3, potassium: 236, calcium: 10, phosphorus: 36, magnesium: 12, iron: 0.3, zinc: 0.4, copper: 0.2, selenium: 0.5, alcohol: 0 }
    },
    {
        id: "alim-410", name: "Grosella roja y blanca", group: "Frutas", sourceLink: "1",
        kcal: 56, protein: 1.4, carbs: 9.5, fats: 0.2,
        micros: { moisture: 84, ash: 0.7, sugars: 7.4, fiber: 4.3, saturatedFat: 0.02, monoFat: 0.03, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 2, vitC: 41, vitD: 0, vitE: 0.1, vitK: 11, vitB1: 0, vitB2: 0.1, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 8, sodium: 1, potassium: 275, calcium: 33, phosphorus: 44, magnesium: 13, iron: 1, zinc: 0.2, copper: 0.1, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-411", name: "Guayaba", group: "Frutas", sourceLink: "1",
        kcal: 68, protein: 2.6, carbs: 8.9, fats: 1,
        micros: { moisture: 80.8, ash: 1.4, sugars: 8.9, fiber: 5.4, saturatedFat: 0.27, monoFat: 0.09, polyFat: 0.4, transFat: 0, cholesterol: 0, vitA: 31, vitC: 228.3, vitD: 0, vitE: 0.7, vitK: 2.6, vitB1: 0.1, vitB2: 0, niacin: 1.1, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 0, folate: 49, sodium: 2, potassium: 417, calcium: 18, phosphorus: 40, magnesium: 22, iron: 0.3, zinc: 0.2, copper: 0.2, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-412", name: "Guindas", group: "Frutas", sourceLink: "1",
        kcal: 63, protein: 1.1, carbs: 13.9, fats: 0.2,
        micros: { moisture: 82.3, ash: 0.5, sugars: 12.8, fiber: 2.1, saturatedFat: 0.04, monoFat: 0.05, polyFat: 0.05, transFat: 0, cholesterol: 0, vitA: 3, vitC: 7, vitD: 0, vitE: 0.1, vitK: 2.1, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 4, sodium: 0, potassium: 222, calcium: 13, phosphorus: 21, magnesium: 11, iron: 0.4, zinc: 0.1, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-413", name: "Guindas ácidas rojas", group: "Frutas", sourceLink: "1",
        kcal: 50, protein: 1, carbs: 10.6, fats: 0.3,
        micros: { moisture: 86.1, ash: 0.4, sugars: 8.5, fiber: 1.6, saturatedFat: 0.07, monoFat: 0.08, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 64, vitC: 10, vitD: 0, vitE: 0.1, vitK: 2.1, vitB1: 0, vitB2: 0, niacin: 0.6, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 8, sodium: 3, potassium: 173, calcium: 16, phosphorus: 15, magnesium: 9, iron: 0.3, zinc: 0.1, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-414", name: "Higos frescos", group: "Frutas", sourceLink: "1",
        kcal: 74, protein: 0.8, carbs: 16.3, fats: 0.3,
        micros: { moisture: 79.1, ash: 0.7, sugars: 16.3, fiber: 2.9, saturatedFat: 0.06, monoFat: 0.07, polyFat: 0.14, transFat: 0, cholesterol: 0, vitA: 7, vitC: 2, vitD: 0, vitE: 0.1, vitK: 4.7, vitB1: 0.1, vitB2: 0.1, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 6, sodium: 1, potassium: 232, calcium: 35, phosphorus: 14, magnesium: 17, iron: 0.4, zinc: 0.2, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-415", name: "Higos secos", group: "Frutas", sourceLink: "1",
        kcal: 249, protein: 3.3, carbs: 54.1, fats: 0.9,
        micros: { moisture: 30.1, ash: 1.9, sugars: 47.9, fiber: 9.8, saturatedFat: 0.14, monoFat: 0.16, polyFat: 0.35, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.2, vitD: 0, vitE: 0.4, vitK: 15.6, vitB1: 0.1, vitB2: 0.1, niacin: 0.6, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 9, sodium: 10, potassium: 680, calcium: 162, phosphorus: 67, magnesium: 68, iron: 2, zinc: 0.6, copper: 0.3, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-416", name: "Huesillo", group: "Frutas", sourceLink: "1",
        kcal: 239, protein: 3.6, carbs: 53.1, fats: 0.8,
        micros: { moisture: 31.8, ash: 2.5, sugars: 41.7, fiber: 8.2, saturatedFat: 0.08, monoFat: 0.28, polyFat: 0.37, transFat: 0, cholesterol: 0, vitA: 108, vitC: 4.8, vitD: 0, vitE: 0.2, vitK: 15.7, vitB1: 0, vitB2: 0.2, niacin: 4.4, vitB6: 0.1, pantothenicAcid: 0.6, vitB12: 0, folate: 0, sodium: 7, potassium: 996, calcium: 28, phosphorus: 119, magnesium: 42, iron: 4.1, zinc: 0.6, copper: 0.4, selenium: 0.5, alcohol: 0 }
    },
    {
        id: "alim-417", name: "Kiwi", group: "Frutas", sourceLink: "1",
        kcal: 61, protein: 1.1, carbs: 11.7, fats: 0.5,
        micros: { moisture: 83.1, ash: 0.6, sugars: 9, fiber: 3, saturatedFat: 0.03, monoFat: 0.05, polyFat: 0.29, transFat: 0, cholesterol: 0, vitA: 4, vitC: 92.7, vitD: 0, vitE: 1.5, vitK: 40.3, vitB1: 0, vitB2: 0, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 25, sodium: 3, potassium: 312, calcium: 34, phosphorus: 34, magnesium: 17, iron: 0.3, zinc: 0.1, copper: 0.1, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-418", name: "Limón fruto", group: "Frutas", sourceLink: "1",
        kcal: 29, protein: 1.1, carbs: 6.5, fats: 0.3,
        micros: { moisture: 89, ash: 0.3, sugars: 2.5, fiber: 2.8, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 1, vitC: 53, vitD: 0, vitE: 0.2, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 11, sodium: 2, potassium: 138, calcium: 26, phosphorus: 16, magnesium: 8, iron: 0.6, zinc: 0.1, copper: 0, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-419", name: "Mandarina", group: "Frutas", sourceLink: "1",
        kcal: 53, protein: 0.8, carbs: 11.5, fats: 0.3,
        micros: { moisture: 85.2, ash: 0.4, sugars: 10.6, fiber: 1.8, saturatedFat: 0.04, monoFat: 0.06, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 34, vitC: 26.7, vitD: 0, vitE: 0.2, vitK: 0, vitB1: 0.1, vitB2: 0, niacin: 0.4, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 16, sodium: 2, potassium: 166, calcium: 37, phosphorus: 20, magnesium: 12, iron: 0.2, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-420", name: "Mango", group: "Frutas", sourceLink: "1",
        kcal: 60, protein: 0.8, carbs: 13.4, fats: 0.4,
        micros: { moisture: 83.5, ash: 0.4, sugars: 13.7, fiber: 1.6, saturatedFat: 0.09, monoFat: 0.14, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 54, vitC: 36.4, vitD: 0, vitE: 0.9, vitK: 4.2, vitB1: 0, vitB2: 0, niacin: 0.7, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 43, sodium: 1, potassium: 168, calcium: 11, phosphorus: 14, magnesium: 10, iron: 0.2, zinc: 0.1, copper: 0.1, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-421", name: "Manzana", group: "Frutas", sourceLink: "1",
        kcal: 52, protein: 0.3, carbs: 11.4, fats: 0.2,
        micros: { moisture: 85.6, ash: 0.2, sugars: 10.4, fiber: 2.4, saturatedFat: 0.03, monoFat: 0.01, polyFat: 0.05, transFat: 0, cholesterol: 0, vitA: 3, vitC: 4.6, vitD: 0, vitE: 0.2, vitK: 2.2, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 3, sodium: 1, potassium: 107, calcium: 6, phosphorus: 11, magnesium: 5, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-422", name: "Manzana fuji", group: "Frutas", sourceLink: "1",
        kcal: 63, protein: 0.2, carbs: 13.1, fats: 0.2,
        micros: { moisture: 84.2, ash: 0.2, sugars: 11.7, fiber: 2.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 2, vitC: 0, vitD: 0, vitE: 0.2, vitK: 1, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 3, sodium: 1, potassium: 109, calcium: 7, phosphorus: 13, magnesium: 5, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-423", name: "Manzana golden", group: "Frutas", sourceLink: "1",
        kcal: 57, protein: 0.3, carbs: 11.2, fats: 0.2,
        micros: { moisture: 85.8, ash: 0.2, sugars: 10, fiber: 2.4, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 3, vitC: 0, vitD: 0, vitE: 0.2, vitK: 1.8, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 3, sodium: 2, potassium: 100, calcium: 6, phosphorus: 10, magnesium: 5, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-424", name: "Manzana roja", group: "Frutas", sourceLink: "1",
        kcal: 59, protein: 0.3, carbs: 11.8, fats: 0.2,
        micros: { moisture: 85.3, ash: 0.1, sugars: 10.5, fiber: 2.3, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 3, vitC: 0, vitD: 0, vitE: 0.2, vitK: 2.6, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 3, sodium: 1, potassium: 104, calcium: 6, phosphorus: 12, magnesium: 5, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-425", name: "Manzana sin cáscara", group: "Frutas", sourceLink: "1",
        kcal: 48, protein: 0.3, carbs: 11.5, fats: 0.1,
        micros: { moisture: 86.7, ash: 0.2, sugars: 10.1, fiber: 1.3, saturatedFat: 0.02, monoFat: 0.01, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 2, vitC: 4, vitD: 0, vitE: 0.1, vitK: 0.6, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 0, sodium: 0, potassium: 90, calcium: 5, phosphorus: 11, magnesium: 4, iron: 0.1, zinc: 0.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-426", name: "Manzana verde", group: "Frutas", sourceLink: "1",
        kcal: 58, protein: 0.4, carbs: 10.8, fats: 0.2,
        micros: { moisture: 85.5, ash: 0.3, sugars: 9.6, fiber: 2.8, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 5, vitC: 0, vitD: 0, vitE: 0.2, vitK: 3.2, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 3, sodium: 1, potassium: 120, calcium: 50, phosphorus: 12, magnesium: 5, iron: 0.2, zinc: 0, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-427", name: "Melón", group: "Frutas", sourceLink: "1",
        kcal: 34, protein: 0.8, carbs: 7.3, fats: 0.2,
        micros: { moisture: 90.2, ash: 0.7, sugars: 7.9, fiber: 0.9, saturatedFat: 0.05, monoFat: 0, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 169, vitC: 36.7, vitD: 0, vitE: 0.1, vitK: 2.5, vitB1: 0, vitB2: 0, niacin: 0.7, vitB6: 0.1, pantothenicAcid: 0.1, vitB12: 0, folate: 21, sodium: 16, potassium: 267, calcium: 9, phosphorus: 15, magnesium: 12, iron: 0.2, zinc: 0.2, copper: 0, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-428", name: "Membrillo", group: "Frutas", sourceLink: "1",
        kcal: 57, protein: 0.4, carbs: 13.4, fats: 0.1,
        micros: { moisture: 83.8, ash: 0.1, sugars: 0, fiber: 1.9, saturatedFat: 0.01, monoFat: 0.04, polyFat: 0.05, transFat: 0, cholesterol: 0, vitA: 2, vitC: 15, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 3, sodium: 4, potassium: 197, calcium: 11, phosphorus: 17, magnesium: 8, iron: 0.7, zinc: 0, copper: 0.1, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-429", name: "Mora", group: "Frutas", sourceLink: "1",
        kcal: 43, protein: 1.4, carbs: 4.3, fats: 0.5,
        micros: { moisture: 88.2, ash: 0.4, sugars: 4.9, fiber: 5.3, saturatedFat: 0.01, monoFat: 0.05, polyFat: 0.28, transFat: 0, cholesterol: 0, vitA: 11, vitC: 21, vitD: 0, vitE: 1.2, vitK: 19.8, vitB1: 0, vitB2: 0, niacin: 0.6, vitB6: 0, pantothenicAcid: 0.3, vitB12: 0, folate: 25, sodium: 1, potassium: 162, calcium: 29, phosphorus: 22, magnesium: 20, iron: 0.6, zinc: 0.5, copper: 0.2, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-430", name: "Naranja", group: "Frutas", sourceLink: "1",
        kcal: 47, protein: 0.9, carbs: 9.3, fats: 0.1,
        micros: { moisture: 86.8, ash: 0.4, sugars: 9.4, fiber: 2.4, saturatedFat: 0.02, monoFat: 0.02, polyFat: 0.03, transFat: 0, cholesterol: 0, vitA: 11, vitC: 53.2, vitD: 0, vitE: 0.2, vitK: 0, vitB1: 0.1, vitB2: 0, niacin: 0.3, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 30, sodium: 0, potassium: 181, calcium: 40, phosphorus: 14, magnesium: 10, iron: 0.1, zinc: 0.1, copper: 0, selenium: 0.5, alcohol: 0 }
    },
    {
        id: "alim-431", name: "Níspero", group: "Frutas", sourceLink: "1",
        kcal: 47, protein: 0.4, carbs: 8.9, fats: 0.2,
        micros: { moisture: 86.7, ash: 0.5, sugars: 0, fiber: 3.2, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 153, vitC: 1, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 1, sodium: 266, potassium: 16, calcium: 27, phosphorus: 13, magnesium: 0, iron: 0.3, zinc: 0.1, copper: 0, selenium: 0.5, alcohol: 0 }
    },
    {
        id: "alim-432", name: "Palta", group: "Frutas", sourceLink: "1",
        kcal: 160, protein: 2, carbs: 1.8, fats: 14.7,
        micros: { moisture: 73.2, ash: 1.6, sugars: 0.7, fiber: 6.7, saturatedFat: 2.13, monoFat: 9.8, polyFat: 1.82, transFat: 0, cholesterol: 0, vitA: 7, vitC: 10, vitD: 0, vitE: 2.1, vitK: 21, vitB1: 0.1, vitB2: 0.1, niacin: 1.7, vitB6: 0.3, pantothenicAcid: 1.4, vitB12: 0, folate: 81, sodium: 7, potassium: 485, calcium: 12, phosphorus: 52, magnesium: 29, iron: 0.6, zinc: 0.6, copper: 0.2, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-433", name: "Palta hass", group: "Frutas", sourceLink: "4",
        kcal: 160, protein: 1.7, carbs: 0.3, fats: 15.4,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 2.64, monoFat: 10.7, polyFat: 2.04, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 4, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-434", name: "Papaya", group: "Frutas", sourceLink: "1",
        kcal: 43, protein: 0.5, carbs: 9.1, fats: 0.3,
        micros: { moisture: 88.1, ash: 0.4, sugars: 7.8, fiber: 1.7, saturatedFat: 0.08, monoFat: 0.07, polyFat: 0.06, transFat: 0, cholesterol: 0, vitA: 47, vitC: 60.9, vitD: 0, vitE: 0.3, vitK: 2.6, vitB1: 0, vitB2: 0, niacin: 0.4, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 37, sodium: 8, potassium: 182, calcium: 20, phosphorus: 10, magnesium: 21, iron: 0.3, zinc: 0.1, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-435", name: "Pasas", group: "Frutas", sourceLink: "1",
        kcal: 299, protein: 3.1, carbs: 75.5, fats: 0.5,
        micros: { moisture: 15.4, ash: 1.9, sugars: 59.2, fiber: 3.7, saturatedFat: 0.06, monoFat: 0.05, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 0, vitC: 2.3, vitD: 0, vitE: 0.1, vitK: 3.5, vitB1: 0.1, vitB2: 0.1, niacin: 0.8, vitB6: 0.2, pantothenicAcid: 0.1, vitB12: 0, folate: 5, sodium: 11, potassium: 749, calcium: 50, phosphorus: 101, magnesium: 32, iron: 1.9, zinc: 0.2, copper: 0.3, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-436", name: "Pepino dulce", group: "Frutas", sourceLink: "2",
        kcal: 25, protein: 0.4, carbs: 6.3, fats: 0.1,
        micros: { moisture: 92.4, ash: 0.3, sugars: 0, fiber: 0.5, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 26, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.6, vitB12: 0, folate: 3, sodium: 117, potassium: 21, calcium: 13, phosphorus: 0, magnesium: 1, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-437", name: "Pera", group: "Frutas", sourceLink: "1",
        kcal: 57, protein: 0.4, carbs: 12.1, fats: 0.1,
        micros: { moisture: 84, ash: 0.3, sugars: 9.8, fiber: 3.1, saturatedFat: 0.02, monoFat: 0.08, polyFat: 0.09, transFat: 0, cholesterol: 0, vitA: 1, vitC: 4.3, vitD: 0, vitE: 0.1, vitK: 4.4, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 7, sodium: 1, potassium: 116, calcium: 9, phosphorus: 12, magnesium: 7, iron: 0.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-438", name: "Peras descecadas", group: "Frutas", sourceLink: "1",
        kcal: 262, protein: 1.9, carbs: 62.2, fats: 0.6,
        micros: { moisture: 26.7, ash: 1.1, sugars: 62.2, fiber: 7.5, saturatedFat: 0.04, monoFat: 0.13, polyFat: 0.15, transFat: 0, cholesterol: 0, vitA: 0, vitC: 7, vitD: 0, vitE: 0.1, vitK: 20.4, vitB1: 0, vitB2: 0.1, niacin: 1.4, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 0, sodium: 6, potassium: 533, calcium: 34, phosphorus: 59, magnesium: 33, iron: 2.1, zinc: 0.4, copper: 0.4, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-439", name: "Piña", group: "Frutas", sourceLink: "1",
        kcal: 50, protein: 0.5, carbs: 11.7, fats: 0.1,
        micros: { moisture: 86, ash: 0.2, sugars: 9.9, fiber: 1.4, saturatedFat: 0.01, monoFat: 0.01, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 3, vitC: 47.8, vitD: 0, vitE: 0, vitK: 0.7, vitB1: 0.1, vitB2: 0, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 18, sodium: 1, potassium: 109, calcium: 13, phosphorus: 8, magnesium: 12, iron: 0.3, zinc: 0.1, copper: 0.1, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-440", name: "Piña en conserva", group: "Frutas", sourceLink: "3",
        kcal: 61, protein: 0.3, carbs: 14.8, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 13.5, fiber: 1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 6, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-441", name: "Plátano", group: "Frutas", sourceLink: "1",
        kcal: 89, protein: 1.1, carbs: 20.3, fats: 0.3,
        micros: { moisture: 74.9, ash: 0.8, sugars: 12.2, fiber: 2.6, saturatedFat: 0.11, monoFat: 0.03, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 3, vitC: 8.7, vitD: 0, vitE: 0.1, vitK: 0.5, vitB1: 0, vitB2: 0.1, niacin: 0.7, vitB6: 0.4, pantothenicAcid: 0.3, vitB12: 0, folate: 20, sodium: 1, potassium: 358, calcium: 5, phosphorus: 22, magnesium: 27, iron: 0.3, zinc: 0.2, copper: 0.1, selenium: 1, alcohol: 0 }
    },
    {
        id: "alim-442", name: "Pomelo", group: "Frutas", sourceLink: "1",
        kcal: 32, protein: 0.6, carbs: 7, fats: 0.1,
        micros: { moisture: 90.9, ash: 0.3, sugars: 7, fiber: 1.1, saturatedFat: 0.01, monoFat: 0.01, polyFat: 0.02, transFat: 0, cholesterol: 0, vitA: 46, vitC: 34.4, vitD: 0, vitE: 0.1, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.3, vitB6: 0, pantothenicAcid: 0.3, vitB12: 0, folate: 10, sodium: 0, potassium: 139, calcium: 12, phosphorus: 8, magnesium: 8, iron: 0.1, zinc: 0.1, copper: 0, selenium: 0.3, alcohol: 0 }
    },
    {
        id: "alim-443", name: "Sandía", group: "Frutas", sourceLink: "1",
        kcal: 30, protein: 0.6, carbs: 7.1, fats: 0.2,
        micros: { moisture: 91.5, ash: 0.3, sugars: 6.2, fiber: 0.4, saturatedFat: 0.02, monoFat: 0.04, polyFat: 0.05, transFat: 0, cholesterol: 0, vitA: 28, vitC: 8.1, vitD: 0, vitE: 0.1, vitK: 0.1, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 3, sodium: 1, potassium: 112, calcium: 7, phosphorus: 11, magnesium: 10, iron: 0.2, zinc: 0.1, copper: 0, selenium: 0.4, alcohol: 0 }
    },
    {
        id: "alim-444", name: "Tumbo", group: "Frutas", sourceLink: "3",
        kcal: 59, protein: 2.2, carbs: 12.2, fats: 0.2,
        micros: { moisture: 76.9, ash: 0.7, sugars: 0, fiber: 7.8, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 28, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-445", name: "Tuna", group: "Frutas", sourceLink: "1",
        kcal: 56, protein: 1.1, carbs: 13.5, fats: 0.4,
        micros: { moisture: 81.4, ash: 0.5, sugars: 0, fiber: 3.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 18, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.3, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 57, potassium: 32, calcium: 0, phosphorus: 0, magnesium: 0, iron: 1.2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-446", name: "Uvas", group: "Frutas", sourceLink: "1",
        kcal: 57, protein: 0.8, carbs: 10, fats: 0,
        micros: { moisture: 84.3, ash: 0.5, sugars: 3.9, fiber: 0.5, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 3, vitD: 0, vitE: 6.5, vitK: 0, vitB1: 0, vitB2: 0, niacin: 1.5, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 2, sodium: 1, potassium: 203, calcium: 37, phosphorus: 24, magnesium: 13, iron: 0.3, zinc: 0.1, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    // Panginayon kadagiti Azúcares, Miel ken Alimentos Dulces (Agregando Azúcares, Miel y Alimentos Dulces)
    {
        id: "alim-447", name: "Azúcar(1)", group: "Azúcares y Miel", sourceLink: "1",
        kcal: 387, protein: 0, carbs: 100, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 99.8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1, potassium: 2, calcium: 1, phosphorus: 0, magnesium: 0, iron: 0.1, zinc: 0, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-448", name: "Azúcar(2)", group: "Azúcares y Miel", sourceLink: "3",
        kcal: 399, protein: 0.1, carbs: 99.6, fats: 0,
        micros: { moisture: 0.1, ash: 0.1, sugars: 0, fiber: 0.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-449", name: "Azúcar flor", group: "Azúcares y Miel", sourceLink: "1",
        kcal: 389, protein: 0, carbs: 99.8, fats: 0,
        micros: { moisture: 0.2, ash: 0, sugars: 97.8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 2, potassium: 2, calcium: 1, phosphorus: 0, magnesium: 0, iron: 0.1, zinc: 0, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-450", name: "Azúcar light con estevia", group: "Azúcares y Miel", sourceLink: "3",
        kcal: 400, protein: 0, carbs: 99.9, fats: 0,
        micros: { moisture: 0.1, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-451", name: "Azúcar light con sucralosa", group: "Azúcares y Miel", sourceLink: "3",
        kcal: 400, protein: 0, carbs: 99.9, fats: 0,
        micros: { moisture: 0.1, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-452", name: "Miel de abeja(1)", group: "Azúcares y Miel", sourceLink: "3",
        kcal: 334, protein: 0.6, carbs: 82.7, fats: 0,
        micros: { moisture: 16.5, ash: 0.1, sugars: 82.7, fiber: 0, saturatedFat: 0.1, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 7.4, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-453", name: "Miel de abeja(2)", group: "Azúcares y Miel", sourceLink: "2",
        kcal: 318, protein: 0.3, carbs: 78.8, fats: 0,
        micros: { moisture: 20.6, ash: 0.3, sugars: 78.8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 3.3, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 0, vitB6: 0.2, pantothenicAcid: 0, vitB12: 9.4, folate: 5, sodium: 50.7, potassium: 29, calcium: 19, phosphorus: 2.1, magnesium: 0.9, iron: 0.1, zinc: 0, copper: 0.8, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-454", name: "Miel de palma", group: "Azúcares y Miel", sourceLink: "2",
        kcal: 254, protein: 0, carbs: 63.6, fats: 0,
        micros: { moisture: 35.9, ash: 0.5, sugars: 63.6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-455", name: "Alfajor", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 407, protein: 2.3, carbs: 69, fats: 13.2,
        micros: { moisture: 10.9, ash: 1.5, sugars: 0, fiber: 1.8, saturatedFat: 9.48, monoFat: 2.17, polyFat: 0.76, transFat: 0, cholesterol: 7.3, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 212, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-456", name: "Barra cereal", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 254, protein: 11.6, carbs: 59.9, fats: 7.5,
        micros: { moisture: 8.2, ash: 1.8, sugars: 0, fiber: 11, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 93, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-457", name: "Barra sabor chocolate con relleno sabor frutilla", group: "2.13 Alimentos Dulces", sourceLink: "4",
        kcal: 487, protein: 3, carbs: 69.2, fats: 15.4,
        micros: { moisture: 0, ash: 0, sugars: 66, fiber: 22, saturatedFat: 4.5, monoFat: 0.66, polyFat: 0.3, transFat: 5, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 50, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-458", name: "Berlín", group: "2.13 Alimentos Dulces", sourceLink: "2",
        kcal: 307, protein: 6.2, carbs: 47.4, fats: 10.3,
        micros: { moisture: 35.6, ash: 0.5, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 38, potassium: 104, calcium: 36, phosphorus: 50, magnesium: 0, iron: 1.4, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-459", name: "Biscocho simple", group: "2.13 Alimentos Dulces", sourceLink: "2",
        kcal: 381, protein: 4.2, carbs: 51.7, fats: 17.4,
        micros: { moisture: 25.2, ash: 1.5, sugars: 0, fiber: 0.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.1, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 412, potassium: 98, calcium: 67, phosphorus: 193, magnesium: 0, iron: 0.9, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-460", name: "Cacao en polvo sin azúcar", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 228, protein: 19.6, carbs: 20.9, fats: 13.7,
        micros: { moisture: 3, ash: 5.8, sugars: 1.8, fiber: 37, saturatedFat: 8.07, monoFat: 4.57, polyFat: 0.44, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 2.5, vitB1: 0.1, vitB2: 0.2, niacin: 2.2, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 32, sodium: 21, potassium: 1524, calcium: 128, phosphorus: 734, magnesium: 499, iron: 13.9, zinc: 6.8, copper: 3.8, selenium: 14.3, alcohol: 0 }
    },
    {
        id: "alim-461", name: "Chancaca", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 367, protein: 0.8, carbs: 91, fats: 0,
        micros: { moisture: 7.3, ash: 0.9, sugars: 91, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 108, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-462", name: "Chocolate de leche con almendras", group: "2.13 Alimentos Dulces", sourceLink: "4",
        kcal: 559, protein: 11.3, carbs: 46.9, fats: 36.2,
        micros: { moisture: 0, ash: 0, sugars: 44, fiber: 0, saturatedFat: 15.6, monoFat: 16, polyFat: 2.6, transFat: 0.5, cholesterol: 17, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 84, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-463", name: "Chocolate amargo 60-69% cacao", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 579, protein: 6.1, carbs: 44.4, fats: 38.3,
        micros: { moisture: 1.3, ash: 1.9, sugars: 36.7, fiber: 8, saturatedFat: 22.03, monoFat: 11.52, polyFat: 1.22, transFat: 0, cholesterol: 6, vitA: 3, vitC: 0, vitD: 0, vitE: 0.6, vitK: 7.2, vitB1: 0, vitB2: 0, niacin: 0.8, vitB6: 0, pantothenicAcid: 0.3, vitB12: 0.2, folate: 10, sodium: 567, potassium: 62, calcium: 260, phosphorus: 176, magnesium: 6.3, iron: 2.7, zinc: 1.2, copper: 8.4, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-464", name: "Chocolate amargo 70-85% cacao", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 598, protein: 7.8, carbs: 35, fats: 42.6,
        micros: { moisture: 1.4, ash: 2.3, sugars: 24, fiber: 10.9, saturatedFat: 24.5, monoFat: 12.8, polyFat: 1.3, transFat: 0, cholesterol: 3, vitA: 2, vitC: 0, vitD: 0, vitE: 0.6, vitK: 7.3, vitB1: 0, vitB2: 0.1, niacin: 1.1, vitB6: 0, pantothenicAcid: 0.4, vitB12: 0.3, folate: 20, sodium: 715, potassium: 73, calcium: 308, phosphorus: 228, magnesium: 11.9, iron: 3.3, zinc: 1.8, copper: 6.8, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-465", name: "Chocolate de leche", group: "2.13 Alimentos Dulces", sourceLink: "4",
        kcal: 548, protein: 8.3, carbs: 60, fats: 30.5,
        micros: { moisture: 0, ash: 0, sugars: 52.3, fiber: 0, saturatedFat: 19, monoFat: 9.6, polyFat: 1.1, transFat: 0.6, cholesterol: 22, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 108, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-466", name: "Cacao en polvo con azúcar", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 393, protein: 8, carbs: 80.5, fats: 2.3,
        micros: { moisture: 1.7, ash: 3.5, sugars: 0, fiber: 4, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-467", name: "Fruta confitada", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 322, protein: 0.3, carbs: 81.3, fats: 0.1,
        micros: { moisture: 16.7, ash: 0.1, sugars: 80.7, fiber: 1.6, saturatedFat: 0.01, monoFat: 0.01, polyFat: 0.02, transFat: 0, cholesterol: 0, vitA: 1, vitC: 0, vitD: 0, vitE: 0, vitK: 0.3, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 98, potassium: 56, calcium: 18, phosphorus: 5, magnesium: 4, iron: 0.2, zinc: 0.1, copper: 0, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-468", name: "Jalea polvo", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 381, protein: 7.8, carbs: 90.5, fats: 0,
        micros: { moisture: 1, ash: 0.7, sugars: 86, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 3, sodium: 466, potassium: 7, calcium: 3, phosphorus: 141, magnesium: 2, iron: 0.1, zinc: 0, copper: 0.1, selenium: 6.7, alcohol: 0 }
    },
    {
        id: "alim-469", name: "Jalea reconstituida(1)", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 62, protein: 1.2, carbs: 14.2, fats: 0,
        micros: { moisture: 84.4, ash: 0.2, sugars: 13.5, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 1, sodium: 75, potassium: 1, calcium: 3, phosphorus: 22, magnesium: 1, iron: 0, zinc: 0, copper: 0, selenium: 1.1, alcohol: 0 }
    },
    {
        id: "alim-470", name: "Jalea reconstituida(2)", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 28, protein: 0, carbs: 71, fats: 0,
        micros: { moisture: 92.7, ash: 0.2, sugars: 5.4, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-471", name: "Jalea en polvo sin azúcar", group: "2.13 Alimentos Dulces", sourceLink: "4",
        kcal: 318, protein: 62, carbs: 9, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 480, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-472", name: "Manjar", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 290, protein: 6.2, carbs: 47.4, fats: 8.4,
        micros: { moisture: 36.5, ash: 1.5, sugars: 38.8, fiber: 0, saturatedFat: 5.09, monoFat: 2.3, polyFat: 0.17, transFat: 0.3, cholesterol: 27.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 130, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-473", name: "Mermelada damasco", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 232, protein: 0.4, carbs: 57.6, fats: 0,
        micros: { moisture: 39.6, ash: 0.3, sugars: 48.2, fiber: 2, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 34, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-474", name: "Mermelada de membrillo", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 199, protein: 0.2, carbs: 49.6, fats: 0,
        micros: { moisture: 48.4, ash: 0, sugars: 41.8, fiber: 1.8, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 12, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-475", name: "Mermelada sin azúcar adicionada", group: "2.13 Alimentos Dulces", sourceLink: "4",
        kcal: 56, protein: 0.7, carbs: 17, fats: 0.2,
        micros: { moisture: 0, ash: 0, sugars: 8.8, fiber: 17, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 19, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-476", name: "Dulce de membrillo", group: "2.13 Alimentos Dulces", sourceLink: "4",
        kcal: 237, protein: 0.2, carbs: 58.7, fats: 0,
        micros: { moisture: 2.1, ash: 0.2, sugars: 58.7, fiber: 0.9, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 17, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-477", name: "Mousse vainilla", group: "2.13 Alimentos Dulces", sourceLink: "2",
        kcal: 149, protein: 6.2, carbs: 18.2, fats: 5.7,
        micros: { moisture: 68.8, ash: 1.1, sugars: 18.2, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 117, potassium: 131, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-478", name: "Muffins arándano", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 333, protein: 4.9, carbs: 54.8, fats: 10.1,
        micros: { moisture: 26.4, ash: 1.9, sugars: 13, fiber: 1.9, saturatedFat: 1.55, monoFat: 2.37, polyFat: 5.48, transFat: 0, cholesterol: 5, vitA: 101, vitC: 0, vitD: 0, vitE: 1, vitK: 20.8, vitB1: 0.2, vitB2: 0.3, niacin: 1.9, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 59, sodium: 444, potassium: 88, calcium: 14, phosphorus: 192, magnesium: 15, iron: 0.5, zinc: 0.5, copper: 0.1, selenium: 18.7, alcohol: 0 }
    },
    {
        id: "alim-479", name: "Oblea bañada con cobertura de chocolate", group: "2.13 Alimentos Dulces", sourceLink: "4",
        kcal: 503, protein: 4, carbs: 68, fats: 23.9,
        micros: { moisture: 0, ash: 0, sugars: 60, fiber: 0, saturatedFat: 18, monoFat: 4, polyFat: 1.4, transFat: 0.3, cholesterol: 4, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 150, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-480", name: "Cono de barquillo azuacarado", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 402, protein: 7.9, carbs: 82.5, fats: 3.8,
        micros: { moisture: 3, ash: 1.1, sugars: 25.7, fiber: 1.7, saturatedFat: 0.57, monoFat: 1.47, polyFat: 1.45, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0.1, vitK: 1.5, vitB1: 0.5, vitB2: 0.4, niacin: 5.1, vitB6: 0.1, pantothenicAcid: 0.4, vitB12: 0, folate: 140, sodium: 298, potassium: 145, calcium: 44, phosphorus: 103, magnesium: 31, iron: 4.4, zinc: 0.8, copper: 0.3, selenium: 4.8, alcohol: 0 }
    },
    {
        id: "alim-481", name: "Pie de limón", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 268, protein: 1.5, carbs: 46, fats: 8.7,
        micros: { moisture: 41.7, ash: 0.9, sugars: 23.9, fiber: 1.2, saturatedFat: 1.77, monoFat: 2.69, polyFat: 3.65, transFat: 0, cholesterol: 45, vitA: 51, vitC: 3.2, vitD: 0.2, vitE: 1.1, vitK: 2.1, vitB1: 0.1, vitB2: 0.2, niacin: 0.6, vitB6: 0, pantothenicAcid: 0.8, vitB12: 0.2, folate: 24, sodium: 172, potassium: 89, calcium: 56, phosphorus: 105, magnesium: 15, iron: 0.6, zinc: 0.5, copper: 0, selenium: 3, alcohol: 0 }
    },
    {
        id: "alim-482", name: "Strudel de manzana", group: "2.13 Alimentos Dulces", sourceLink: "1",
        kcal: 274, protein: 3.3, carbs: 39, fats: 11.2,
        micros: { moisture: 43.5, ash: 0.8, sugars: 25.8, fiber: 2.2, saturatedFat: 2.04, monoFat: 3.27, polyFat: 5.32, transFat: 0, cholesterol: 6, vitA: 6, vitC: 1.7, vitD: 0, vitE: 1.4, vitK: 2.9, vitB1: 0, vitB2: 0, niacin: 0.3, vitB6: 0, pantothenicAcid: 0.3, vitB12: 0.2, folate: 28, sodium: 135, potassium: 149, calcium: 15, phosphorus: 33, magnesium: 9, iron: 0.4, zinc: 0.2, copper: 0, selenium: 6.1, alcohol: 0 }
    },
    {
        id: "alim-483", name: "Marshmallow", group: "2.13 Alimentos Dulces", sourceLink: "3",
        kcal: 338, protein: 4.3, carbs: 80.2, fats: 0,
        micros: { moisture: 15.4, ash: 0.1, sugars: 80.2, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 32, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-484", name: "Sustancia simple (marshmallow)", group: "2.13 Alimentos Dulces", sourceLink: "2",
        kcal: 349, protein: 2.1, carbs: 84.1, fats: 0,
        micros: { moisture: 13.1, ash: 0.2, sugars: 84.1, fiber: 0, saturatedFat: 0.5, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 40, potassium: 9, calcium: 24, phosphorus: 11, magnesium: 0, iron: 0.9, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-485", name: "Sustancia (marshmallow) con chocolate", group: "2.13 Alimentos Dulces", sourceLink: "2",
        kcal: 464, protein: 4.4, carbs: 69.9, fats: 18.4,
        micros: { moisture: 6.1, ash: 1.2, sugars: 69.9, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 162, potassium: 186, calcium: 90, phosphorus: 139, magnesium: 0, iron: 1.8, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Panginayon kadagiti Postres de leche ken Jugos y Néctares (Agregando Postres de leche y Jugos y Néctares)
    {
        id: "alim-486", name: "Arroz con leche", group: "Postres de leche", sourceLink: "4",
        kcal: 85, protein: 3.5, carbs: 14.5, fats: 1.4,
        micros: { moisture: 0, ash: 0, sugars: 4.3, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 44, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-487", name: "Flan de leche sabor vainilla", group: "Postres de leche", sourceLink: "4",
        kcal: 115, protein: 2.6, carbs: 24, fats: 0.9,
        micros: { moisture: 0, ash: 0, sugars: 13.3, fiber: 0, saturatedFat: 0.6, monoFat: 0.12, polyFat: 0.01, transFat: 0.1, cholesterol: 6, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 130, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-488", name: "Flan vainilla reconstituido", group: "Postres de leche", sourceLink: "3",
        kcal: 81, protein: 3.4, carbs: 8.4, fats: 3.8,
        micros: { moisture: 83.8, ash: 0.6, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 71, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-489", name: "Flan polvo", group: "Postres de leche", sourceLink: "2",
        kcal: 390, protein: 0, carbs: 97.4, fats: 0,
        micros: { moisture: 0.6, ash: 2, sugars: 97.4, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 958, potassium: 34, calcium: 11, phosphorus: 1, magnesium: 0, iron: 2, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-490", name: "Leche asada con salsa de caramelo", group: "Postres de leche", sourceLink: "4",
        kcal: 144, protein: 3.6, carbs: 24.4, fats: 3.6,
        micros: { moisture: 0, ash: 0, sugars: 22.2, fiber: 0, saturatedFat: 2.5, monoFat: 0.97, polyFat: 0.17, transFat: 0.1, cholesterol: 10.5, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 95, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-491", name: "Sémola con leche con salsa de caramelo", group: "Postres de leche", sourceLink: "4",
        kcal: 142, protein: 2.7, carbs: 28, fats: 2.2,
        micros: { moisture: 0, ash: 0, sugars: 22.2, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 77, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-492", name: "Bebida de soya sabor manzana", group: "2.15 Jugos y Néctares", sourceLink: "4",
        kcal: 66, protein: 1.2, carbs: 14, fats: 0.6,
        micros: { moisture: 0, ash: 0, sugars: 12, fiber: 0.8, saturatedFat: 0, monoFat: 0.2, polyFat: 0.4, transFat: 0, cholesterol: 0, vitA: 90, vitC: 9, vitD: 0.8, vitE: 2, vitK: 0, vitB1: 0.2, vitB2: 0.3, niacin: 3.2, vitB6: 0.3, pantothenicAcid: 0, vitB12: 0.5, folate: 48, sodium: 34, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 1.5, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-493", name: "Jugo de limón", group: "2.15 Jugos y Néctares", sourceLink: "1",
        kcal: 22, protein: 0.4, carbs: 6.6, fats: 0.2,
        micros: { moisture: 92.3, ash: 0.2, sugars: 2.5, fiber: 0.3, saturatedFat: 0.04, monoFat: 0.01, polyFat: 0.02, transFat: 0, cholesterol: 0, vitA: 0, vitC: 38.7, vitD: 0, vitE: 0.2, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 20, sodium: 1, potassium: 103, calcium: 6, phosphorus: 8, magnesium: 6, iron: 0.1, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-494", name: "Jugo de mandarina", group: "2.15 Jugos y Néctares", sourceLink: "1",
        kcal: 43, protein: 0.5, carbs: 9.9, fats: 0.2,
        micros: { moisture: 88.9, ash: 0.3, sugars: 9.9, fiber: 0.2, saturatedFat: 0.02, monoFat: 0.04, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 13, vitC: 31, vitD: 0, vitE: 0.1, vitK: 0, vitB1: 1.1, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 5, sodium: 1, potassium: 178, calcium: 18, phosphorus: 14, magnesium: 8, iron: 0.2, zinc: 0, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-495", name: "Jugo de maqui", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 45, protein: 0, carbs: 11.2, fats: 0,
        micros: { moisture: 92.7, ash: 0, sugars: 4.8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 14, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-496", name: "Jugo de naranja", group: "2.15 Jugos y Néctares", sourceLink: "1",
        kcal: 45, protein: 0.7, carbs: 10.2, fats: 0.2,
        micros: { moisture: 88.3, ash: 0.4, sugars: 8.4, fiber: 0.2, saturatedFat: 0.02, monoFat: 0.04, polyFat: 0.04, transFat: 0, cholesterol: 0, vitA: 10, vitC: 50, vitD: 0, vitE: 0, vitK: 0.1, vitB1: 0.1, vitB2: 0, niacin: 0.4, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 30, sodium: 1, potassium: 200, calcium: 11, phosphorus: 17, magnesium: 11, iron: 0.2, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-497", name: "Jugo de polemo", group: "2.15 Jugos y Néctares", sourceLink: "1",
        kcal: 39, protein: 0.5, carbs: 9.1, fats: 0.1,
        micros: { moisture: 90, ash: 0.2, sugars: 9.1, fiber: 0.1, saturatedFat: 0.01, monoFat: 0.01, polyFat: 0.02, transFat: 0, cholesterol: 0, vitA: 1, vitC: 38, vitD: 0, vitE: 0.2, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0.2, vitB12: 0, folate: 10, sodium: 1, potassium: 162, calcium: 9, phosphorus: 15, magnesium: 12, iron: 0.2, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-498", name: "Néctar damasco", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 42, protein: 0.1, carbs: 10.3, fats: 0,
        micros: { moisture: 93.4, ash: 0, sugars: 8.2, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 8, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-499", name: "Néctar damasco light", group: "2.15 Jugos y Néctares", sourceLink: "4",
        kcal: 10, protein: 0.3, carbs: 1.9, fats: 0.1,
        micros: { moisture: 0, ash: 0, sugars: 1.9, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 9, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-500", name: "Néctar durazno", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 42, protein: 0.1, carbs: 10.4, fats: 0,
        micros: { moisture: 93.1, ash: 0, sugars: 8.8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 9, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-501", name: "Néctar durazno light", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 15, protein: 0.3, carbs: 3.3, fats: 0,
        micros: { moisture: 97.6, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 8, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-502", name: "Néctar manzana", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 41, protein: 0, carbs: 10.2, fats: 0,
        micros: { moisture: 93.3, ash: 0, sugars: 8.6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 7, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-503", name: "Néctar naranja", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 41, protein: 0.4, carbs: 9.8, fats: 0,
        micros: { moisture: 93.9, ash: 0, sugars: 8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 7, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-504", name: "Néctar naranja light", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 20, protein: 0.3, carbs: 4.8, fats: 0,
        micros: { moisture: 96.6, ash: 0.1, sugars: 3.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 7, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-505", name: "Néctar uva light", group: "2.15 Jugos y Néctares", sourceLink: "3",
        kcal: 9, protein: 0.3, carbs: 1.9, fats: 0,
        micros: { moisture: 98.5, ash: 0, sugars: 1.7, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 17, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Panginayon kadagiti Refrescos en Polvo
    {
        id: "alim-506", name: "Refresco polvo bajo en calorías", group: "Refrescos en Polvo", sourceLink: "4",
        kcal: 366, protein: 0, carbs: 81, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 80, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 85, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 125, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-507", name: "Refresco polvo light durazno", group: "Refrescos en Polvo", sourceLink: "3",
        kcal: 155, protein: 3, carbs: 35.7, fats: 0,
        micros: { moisture: 5.5, ash: 3.8, sugars: 0, fiber: 52, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-508", name: "Refresco polvo light naranja", group: "Refrescos en Polvo", sourceLink: "3",
        kcal: 226, protein: 1.7, carbs: 54.8, fats: 0,
        micros: { moisture: 3.6, ash: 4.6, sugars: 0, fiber: 35.3, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-509", name: "Refresco polvo light piña", group: "Refrescos en Polvo", sourceLink: "3",
        kcal: 125, protein: 1.5, carbs: 29.8, fats: 0,
        micros: { moisture: 7, ash: 3.8, sugars: 0, fiber: 57.9, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Panginayon kadagiti Bebidas ken Bebidas Alcoholicas (Agregando Bebidas y Bebidas Alcohólicas)
    {
        id: "alim-510", name: "Agua tónica", group: "Bebidas", sourceLink: "1",
        kcal: 34, protein: 0, carbs: 8.8, fats: 0,
        micros: { moisture: 91.1, ash: 0.1, sugars: 8.8, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 12, potassium: 0, calcium: 1, phosphorus: 0, magnesium: 0, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-511", name: "Bebida cola light", group: "Bebidas", sourceLink: "3",
        kcal: 0, protein: 0, carbs: 0, fats: 0,
        micros: { moisture: 99.6, ash: 0.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-512", name: "Bebida cola tradicional", group: "Bebidas", sourceLink: "1",
        kcal: 42, protein: 0, carbs: 10.4, fats: 0,
        micros: { moisture: 89.4, ash: 0, sugars: 9.9, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 3, potassium: 5, calcium: 1, phosphorus: 9, magnesium: 0, iron: 0, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-513", name: "Bebida energética", group: "Bebidas", sourceLink: "1",
        kcal: 43, protein: 0.5, carbs: 10.2, fats: 0,
        micros: { moisture: 89.2, ash: 0.1, sugars: 10.2, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 39, potassium: 3, calcium: 6, phosphorus: 0, magnesium: 19, iron: 0.1, zinc: 0, copper: 0, selenium: 0.2, alcohol: 0 }
    },
    {
        id: "alim-514", name: "Bebida gaseosa sabor limón", group: "Bebidas", sourceLink: "1",
        kcal: 41, protein: 0.1, carbs: 10.4, fats: 0,
        micros: { moisture: 89.5, ash: 0, sugars: 10.4, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 10, potassium: 1, calcium: 2, phosphorus: 0, magnesium: 1, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-515", name: "Bebida gaseosa sabor naranja", group: "Bebidas", sourceLink: "1",
        kcal: 48, protein: 0, carbs: 12.3, fats: 0,
        micros: { moisture: 87.6, ash: 0.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 12, potassium: 2, calcium: 5, phosphorus: 1, magnesium: 1, iron: 0.1, zinc: 0.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-516", name: "Bebida gaseosa sabor piña", group: "Bebidas", sourceLink: "1",
        kcal: 40, protein: 0.1, carbs: 10.1, fats: 0,
        micros: { moisture: 89.8, ash: 0, sugars: 9, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 9, potassium: 1, calcium: 2, phosphorus: 0, magnesium: 1, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-517", name: "Bebida gaseosa sabor piña libre de azúcar", group: "Bebidas", sourceLink: "3",
        kcal: 1, protein: 0.1, carbs: 0.2, fats: 0,
        micros: { moisture: 99.8, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 8.9, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-518", name: "Bebida isotónica", group: "Bebidas", sourceLink: "1",
        kcal: 32, protein: 0, carbs: 7.8, fats: 0.1,
        micros: { moisture: 91.9, ash: 0.2, sugars: 6.1, fiber: 0, saturatedFat: 0.01, monoFat: 0.03, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.6, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0.2, pantothenicAcid: 0.9, vitB12: 0, folate: 0, sodium: 42, potassium: 18, calcium: 1, phosphorus: 1, magnesium: 0, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-519", name: "Bebida isotónica sabor lima limón", group: "Bebidas", sourceLink: "4",
        kcal: 24, protein: 0, carbs: 6, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 49, potassium: 24, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-520", name: "Cerveza", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 51, protein: 0.5, carbs: 7.4, fats: 0,
        micros: { moisture: 92, ash: 0.2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.5, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 6, sodium: 4, potassium: 27, calcium: 4, phosphorus: 14, magnesium: 6, iron: 0, zinc: 0, copper: 0, selenium: 0.6, alcohol: 6.4 }
    },
    {
        id: "alim-521", name: "Champagna", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 77, protein: 0.2, carbs: 0, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 6.1, sodium: 0, potassium: 5.5, calcium: 0, phosphorus: 8.5, magnesium: 0.3, iron: 0.1, zinc: 0, copper: 0, selenium: 0, alcohol: 7 }
    },
    {
        id: "alim-522", name: "Licor de café", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 325, protein: 0.1, carbs: 52.5, fats: 0.3,
        micros: { moisture: 31, ash: 0.1, sugars: 38.3, fiber: 0, saturatedFat: 0.11, monoFat: 0.02, polyFat: 0.11, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 8, potassium: 0, calcium: 1, phosphorus: 6, magnesium: 3, iron: 0.1, zinc: 0, copper: 0, selenium: 0.4, alcohol: 16 }
    },
    {
        id: "alim-523", name: "Licor de menta", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 351, protein: 0, carbs: 71.4, fats: 0.3,
        micros: { moisture: 28.3, ash: 0, sugars: 41.6, fiber: 0, saturatedFat: 0.01, monoFat: 0.02, polyFat: 0.17, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 5, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0.1, zinc: 0, copper: 0.1, selenium: 0.4, alcohol: 20.8 }
    },
    {
        id: "alim-524", name: "Martini", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 223, protein: 0, carbs: 0, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 3, potassium: 0, calcium: 2, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 12 }
    },
    {
        id: "alim-525", name: "Pisco", group: "2.18 Bebidas Alcoholicas", sourceLink: "6",
        kcal: 210, protein: 0, carbs: 0, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 28 }
    },
    {
        id: "alim-526", name: "Pisco sour", group: "2.18 Bebidas Alcoholicas", sourceLink: "3",
        kcal: 185, protein: 0, carbs: 14.3, fats: 0.1,
        micros: { moisture: 88.9, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 16 }
    },
    {
        id: "alim-527", name: "Ron", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 231, protein: 0, carbs: 33.4, fats: 0,
        micros: { moisture: 66.6, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.01, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1, potassium: 2, calcium: 0, phosphorus: 5, magnesium: 0, iron: 0.1, zinc: 0.1, copper: 0, selenium: 0, alcohol: 32 }
    },
    {
        id: "alim-528", name: "Vodka", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 230, protein: 0, carbs: 33.4, fats: 0,
        micros: { moisture: 66.6, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.01, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1, potassium: 1, calcium: 0, phosphorus: 5, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 32 }
    },
    {
        id: "alim-529", name: "Whisky", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 240, protein: 0, carbs: 36.1, fats: 0,
        micros: { moisture: 63.9, ash: 0, sugars: 0.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 1, potassium: 0, calcium: 3, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 32 }
    },
    {
        id: "alim-530", name: "Vino blanco", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 81, protein: 0.1, carbs: 3.3, fats: 0,
        micros: { moisture: 86.9, ash: 0.2, sugars: 1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0.4, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0.1, pantothenicAcid: 0, vitB12: 0, folate: 1, sodium: 5, potassium: 71, calcium: 9, phosphorus: 18, magnesium: 10, iron: 0.3, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 9.6 }
    },
    {
        id: "alim-531", name: "Vino tinto(1)", group: "2.18 Bebidas Alcoholicas", sourceLink: "1",
        kcal: 82, protein: 0.1, carbs: 3.6, fats: 0,
        micros: { moisture: 86.5, ash: 0.3, sugars: 0.6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0.4, vitB1: 0, vitB2: 0, niacin: 0.2, vitB6: 0.1, pantothenicAcid: 0, vitB12: 0, folate: 1, sodium: 4, potassium: 127, calcium: 8, phosphorus: 2, magnesium: 12, iron: 0.5, zinc: 0.1, copper: 0, selenium: 0.2, alcohol: 9.6 }
    },
    {
        id: "alim-532", name: "Vino tinto(2)", group: "2.18 Bebidas Alcoholicas", sourceLink: "3",
        kcal: 84, protein: 0.1, carbs: 1.6, fats: 0,
        micros: { moisture: 97.3, ash: 0.4, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 9.6 }
    },
    // Panginayon kadagiti Productos Salados, Salsas ken Especias (Agregando Productos Salados, Salsas y Especias)
    {
        id: "alim-533", name: "Hojuelas papas fritas", group: "Productos Salados", sourceLink: "3",
        kcal: 500, protein: 5.7, carbs: 59.7, fats: 26.5,
        micros: { moisture: 1.2, ash: 3.3, sugars: 0.8, fiber: 3.6, saturatedFat: 2.22, monoFat: 16.39, polyFat: 6.71, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 354, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-534", name: "Hojuelas papas fritas sabor crema y cebolla", group: "Productos Salados", sourceLink: "3",
        kcal: 485, protein: 6.1, carbs: 57.8, fats: 25.5,
        micros: { moisture: 2.6, ash: 3.5, sugars: 4.3, fiber: 4.5, saturatedFat: 1.68, monoFat: 16.9, polyFat: 1.45, transFat: 0.4, cholesterol: 0.7, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 418, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-535", name: "Suflé sabor queso", group: "Productos Salados", sourceLink: "3",
        kcal: 510, protein: 6.2, carbs: 64.5, fats: 25.2,
        micros: { moisture: 1, ash: 1.9, sugars: 6.8, fiber: 1.2, saturatedFat: 3.18, monoFat: 9.41, polyFat: 11.48, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 468, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-536", name: "Pesto", group: "2.20 Salsas", sourceLink: "1",
        kcal: 418, protein: 9.8, carbs: 8.3, fats: 37.6,
        micros: { moisture: 39, ash: 3.5, sugars: 6.3, fiber: 1.8, saturatedFat: 7.07, monoFat: 22.16, polyFat: 6.55, transFat: 0, cholesterol: 0, vitA: 77, vitC: 0, vitD: 0, vitE: 7.3, vitK: 151.1, vitB1: 0.2, vitB2: 0.7, niacin: 0.5, vitB6: 0.1, pantothenicAcid: 1.7, vitB12: 0, folate: 16, sodium: 603, potassium: 560, calcium: 306, phosphorus: 273, magnesium: 47, iron: 0.6, zinc: 1.3, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-537", name: "Salsa barbecue", group: "2.20 Salsas", sourceLink: "1",
        kcal: 172, protein: 0.8, carbs: 39.9, fats: 0.6,
        micros: { moisture: 54.7, ash: 3.1, sugars: 33.2, fiber: 0.9, saturatedFat: 0.05, monoFat: 0.08, polyFat: 0.1, transFat: 0, cholesterol: 0, vitA: 11, vitC: 0.6, vitD: 0, vitE: 0.8, vitK: 1.8, vitB1: 0, vitB2: 0.1, niacin: 0.6, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 2, sodium: 1027, potassium: 232, calcium: 33, phosphorus: 20, magnesium: 13, iron: 0.6, zinc: 0.2, copper: 0.1, selenium: 1.3, alcohol: 0 }
    },
    {
        id: "alim-538", name: "Salsa blanca casera", group: "2.20 Salsas", sourceLink: "1",
        kcal: 105, protein: 3.8, carbs: 7.3, fats: 6.7,
        micros: { moisture: 80.7, ash: 1.5, sugars: 4.8, fiber: 0.1, saturatedFat: 2.15, monoFat: 2.67, polyFat: 1.59, transFat: 0, cholesterol: 8, vitA: 73, vitC: 0.8, vitD: 1.2, vitE: 0.2, vitK: 0.6, vitB1: 0.1, vitB2: 0.2, niacin: 0.3, vitB6: 0, pantothenicAcid: 0.3, vitB12: 0.3, folate: 9, sodium: 328, potassium: 163, calcium: 126, phosphorus: 101, magnesium: 15, iron: 0.2, zinc: 0.4, copper: 0, selenium: 3.3, alcohol: 0 }
    },
    {
        id: "alim-539", name: "Salsa de tomates", group: "2.20 Salsas", sourceLink: "1",
        kcal: 24, protein: 1.2, carbs: 3.8, fats: 0.3,
        micros: { moisture: 91.3, ash: 1.9, sugars: 3.6, fiber: 1.5, saturatedFat: 0.04, monoFat: 0.05, polyFat: 0.12, transFat: 0, cholesterol: 0, vitA: 22, vitC: 7, vitD: 0, vitE: 1.4, vitK: 2.8, vitB1: 0, vitB2: 0.1, niacin: 1, vitB6: 0.3, pantothenicAcid: 0, vitB12: 0, folate: 9, sodium: 474, potassium: 297, calcium: 14, phosphorus: 27, magnesium: 15, iron: 1, zinc: 0.2, copper: 0.1, selenium: 0.6, alcohol: 0 }
    },
    {
        id: "alim-540", name: "Salsa de tomates", group: "2.20 Salsas", sourceLink: "4",
        kcal: 47, protein: 1.7, carbs: 9.7, fats: 0.2,
        micros: { moisture: 0, ash: 0, sugars: 9.4, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 356, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-541", name: "Salsa de tomates con cebolla", group: "2.20 Salsas", sourceLink: "1",
        kcal: 42, protein: 1.6, carbs: 8.2, fats: 0.2,
        micros: { moisture: 86.1, ash: 2.2, sugars: 0, fiber: 1.8, saturatedFat: 0.03, monoFat: 0.03, polyFat: 0.08, transFat: 0, cholesterol: 0, vitA: 43, vitC: 12.7, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.1, niacin: 1.2, vitB6: 0.3, pantothenicAcid: 0.4, vitB12: 0, folate: 22, sodium: 551, potassium: 413, calcium: 17, phosphorus: 39, magnesium: 19, iron: 0.9, zinc: 0.2, copper: 0.2, selenium: 0.8, alcohol: 0 }
    },
    {
        id: "alim-542", name: "Salsa tártara", group: "2.20 Salsas", sourceLink: "1",
        kcal: 211, protein: 1, carbs: 12.8, fats: 16.7,
        micros: { moisture: 67, ash: 2, sugars: 4.3, fiber: 0.5, saturatedFat: 3.33, monoFat: 3.61, polyFat: 9.04, transFat: 0, cholesterol: 7, vitA: 11, vitC: 2.3, vitD: 0, vitE: 1.7, vitK: 50.4, vitB1: 0, vitB2: 0, niacin: 0.1, vitB6: 0, pantothenicAcid: 0.1, vitB12: 0, folate: 5, sodium: 667, potassium: 68, calcium: 26, phosphorus: 17, magnesium: 6, iron: 0.3, zinc: 0.1, copper: 0, selenium: 0.9, alcohol: 0 }
    },
    {
        id: "alim-543", name: "Salsa teriyaki", group: "2.20 Salsas", sourceLink: "1",
        kcal: 89, protein: 5.9, carbs: 15.8, fats: 0,
        micros: { moisture: 67.7, ash: 10.4, sugars: 14.1, fiber: 0.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.1, niacin: 1.3, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 8, sodium: 3833, potassium: 225, calcium: 25, phosphorus: 154, magnesium: 61, iron: 1.7, zinc: 0.1, copper: 0.1, selenium: 1.1, alcohol: 0 }
    },
    {
        id: "alim-544", name: "Salsa verde", group: "2.20 Salsas", sourceLink: "1",
        kcal: 38, protein: 1.1, carbs: 4.5, fats: 0.9,
        micros: { moisture: 89.5, ash: 2.1, sugars: 3.5, fiber: 1.9, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 11, vitC: 12.3, vitD: 0, vitE: 0.4, vitK: 13.6, vitB1: 0, vitB2: 0, niacin: 1.6, vitB6: 0.1, pantothenicAcid: 0.2, vitB12: 0, folate: 8, sodium: 600, potassium: 259, calcium: 9, phosphorus: 41, magnesium: 19, iron: 0.7, zinc: 0.3, copper: 0.1, selenium: 0.8, alcohol: 0 }
    },
    {
        id: "alim-545", name: "Ajo en polvo", group: "2.21 Especias", sourceLink: "1",
        kcal: 331, protein: 16.6, carbs: 63.7, fats: 0.7,
        micros: { moisture: 6.5, ash: 3.5, sugars: 2.4, fiber: 9, saturatedFat: 0.25, monoFat: 0.12, polyFat: 0.18, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1.2, vitD: 0, vitE: 0.7, vitK: 0.4, vitB1: 0.4, vitB2: 0.1, niacin: 0.8, vitB6: 1.7, pantothenicAcid: 0.7, vitB12: 0, folate: 47, sodium: 60, potassium: 1193, calcium: 79, phosphorus: 414, magnesium: 77, iron: 5.7, zinc: 3, copper: 0.5, selenium: 23.9, alcohol: 0 }
    },
    {
        id: "alim-546", name: "Albahaca fresca", group: "2.21 Especias", sourceLink: "1",
        kcal: 23, protein: 3.2, carbs: 1.1, fats: 0.6,
        micros: { moisture: 92.1, ash: 1.5, sugars: 0.3, fiber: 1.6, saturatedFat: 0.04, monoFat: 0.09, polyFat: 0.39, transFat: 0, cholesterol: 0, vitA: 264, vitC: 18, vitD: 0, vitE: 0.8, vitK: 414.8, vitB1: 0, vitB2: 0.1, niacin: 0.9, vitB6: 0.2, pantothenicAcid: 0.2, vitB12: 0, folate: 68, sodium: 4, potassium: 295, calcium: 177, phosphorus: 56, magnesium: 64, iron: 3.2, zinc: 0.8, copper: 0.4, selenium: 0.3, alcohol: 0 }
    },
    {
        id: "alim-547", name: "Albahaca seca", group: "2.21 Especias", sourceLink: "1",
        kcal: 233, protein: 23, carbs: 10.1, fats: 4.1,
        micros: { moisture: 10.4, ash: 14.9, sugars: 1.7, fiber: 37.7, saturatedFat: 2.16, monoFat: 1.24, polyFat: 0.5, transFat: 0, cholesterol: 0, vitA: 37, vitC: 0.8, vitD: 0, vitE: 10.7, vitK: 1714.5, vitB1: 0.1, vitB2: 1.2, niacin: 4.9, vitB6: 1.3, pantothenicAcid: 0.8, vitB12: 0, folate: 310, sodium: 76, potassium: 2630, calcium: 2240, phosphorus: 274, magnesium: 711, iron: 89.8, zinc: 7.1, copper: 2.1, selenium: 3, alcohol: 0 }
    },
    {
        id: "alim-548", name: "Azafrán", group: "2.21 Especias", sourceLink: "1",
        kcal: 310, protein: 11.4, carbs: 61.5, fats: 5.9,
        micros: { moisture: 11.9, ash: 5.5, sugars: 0, fiber: 3.9, saturatedFat: 1.59, monoFat: 0.43, polyFat: 2.07, transFat: 0, cholesterol: 0, vitA: 27, vitC: 80.8, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 1.5, vitB6: 1, pantothenicAcid: 0, vitB12: 0, folate: 93, sodium: 148, potassium: 1724, calcium: 111, phosphorus: 252, magnesium: 264, iron: 11.1, zinc: 1.1, copper: 0.3, selenium: 5.6, alcohol: 0 }
    },
    {
        id: "alim-549", name: "Canela", group: "2.21 Especias", sourceLink: "1",
        kcal: 247, protein: 4, carbs: 27.5, fats: 1.2,
        micros: { moisture: 10.6, ash: 3.6, sugars: 2.2, fiber: 53.1, saturatedFat: 0.35, monoFat: 0.25, polyFat: 0.07, transFat: 0, cholesterol: 0, vitA: 15, vitC: 3.8, vitD: 0, vitE: 2.3, vitK: 31.2, vitB1: 0, vitB2: 0, niacin: 1.3, vitB6: 0.2, pantothenicAcid: 0.4, vitB12: 0, folate: 6, sodium: 10, potassium: 431, calcium: 1002, phosphorus: 64, magnesium: 60, iron: 8.3, zinc: 1.8, copper: 0.3, selenium: 3.1, alcohol: 0 }
    },
    {
        id: "alim-550", name: "Cardamomo", group: "2.21 Especias", sourceLink: "1",
        kcal: 311, protein: 10.8, carbs: 40.5, fats: 6.7,
        micros: { moisture: 8.3, ash: 5.8, sugars: 0, fiber: 28, saturatedFat: 0.68, monoFat: 0.87, polyFat: 0.43, transFat: 0, cholesterol: 0, vitA: 0, vitC: 21, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.2, vitB2: 0.2, niacin: 1.1, vitB6: 0.2, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 18, potassium: 1119, calcium: 383, phosphorus: 178, magnesium: 229, iron: 14, zinc: 7.5, copper: 0.4, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-551", name: "Cebolla en polvo", group: "2.21 Especias", sourceLink: "1",
        kcal: 341, protein: 10.4, carbs: 63.9, fats: 1,
        micros: { moisture: 5.4, ash: 4, sugars: 6.6, fiber: 15.2, saturatedFat: 0.22, monoFat: 0.2, polyFat: 0.31, transFat: 0, cholesterol: 0, vitA: 0, vitC: 23.4, vitD: 0, vitE: 0.3, vitK: 4.1, vitB1: 0.5, vitB2: 0.1, niacin: 0.3, vitB6: 0.7, pantothenicAcid: 0.7, vitB12: 0, folate: 64, sodium: 73, potassium: 985, calcium: 384, phosphorus: 322, magnesium: 113, iron: 3.9, zinc: 4.1, copper: 0.6, selenium: 14.3, alcohol: 0 }
    },
    {
        id: "alim-552", name: "Clavo de olor", group: "2.21 Especias", sourceLink: "1",
        kcal: 274, protein: 6, carbs: 31.6, fats: 13,
        micros: { moisture: 9.9, ash: 5.6, sugars: 2.4, fiber: 33.9, saturatedFat: 3.95, monoFat: 1.39, polyFat: 3.61, transFat: 0, cholesterol: 0, vitA: 8, vitC: 0.2, vitD: 0, vitE: 8.8, vitK: 141.8, vitB1: 0.2, vitB2: 0.2, niacin: 1.6, vitB6: 0.4, pantothenicAcid: 0.5, vitB12: 0, folate: 25, sodium: 277, potassium: 1020, calcium: 632, phosphorus: 104, magnesium: 259, iron: 11.8, zinc: 2.3, copper: 0.4, selenium: 7.2, alcohol: 0 }
    },
    {
        id: "alim-553", name: "Cúrcuma", group: "2.21 Especias", sourceLink: "1",
        kcal: 312, protein: 9.7, carbs: 44.4, fats: 3.3,
        micros: { moisture: 12.9, ash: 7.1, sugars: 3.2, fiber: 22.7, saturatedFat: 1.84, monoFat: 0.45, polyFat: 0.76, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0.7, vitD: 0, vitE: 4.4, vitK: 13.4, vitB1: 0.1, vitB2: 0.2, niacin: 1.4, vitB6: 0.1, pantothenicAcid: 0.5, vitB12: 0, folate: 20, sodium: 27, potassium: 2080, calcium: 168, phosphorus: 299, magnesium: 208, iron: 55, zinc: 4.5, copper: 1.3, selenium: 6.2, alcohol: 0 }
    },
    {
        id: "alim-554", name: "Curry en polvo", group: "2.21 Especias", sourceLink: "1",
        kcal: 325, protein: 14.3, carbs: 2.6, fats: 14,
        micros: { moisture: 8.8, ash: 7.1, sugars: 2.6, fiber: 53.2, saturatedFat: 1.65, monoFat: 8.78, polyFat: 3.06, transFat: 0, cholesterol: 0, vitA: 1, vitC: 0.7, vitD: 0, vitE: 25.2, vitK: 99.8, vitB1: 0.2, vitB2: 0.2, niacin: 3.3, vitB6: 0.1, pantothenicAcid: 1.1, vitB12: 0, folate: 56, sodium: 52, potassium: 1170, calcium: 525, phosphorus: 367, magnesium: 255, iron: 19.1, zinc: 4.7, copper: 1.2, selenium: 40.3, alcohol: 0 }
    },
    {
        id: "alim-555", name: "Eneldo fresco", group: "2.21 Especias", sourceLink: "1",
        kcal: 43, protein: 3.5, carbs: 4.9, fats: 1.1,
        micros: { moisture: 86, ash: 2.5, sugars: 0, fiber: 2.1, saturatedFat: 0.06, monoFat: 0.8, polyFat: 0.1, transFat: 0, cholesterol: 0, vitA: 386, vitC: 85, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 1.6, vitB6: 0.2, pantothenicAcid: 0.4, vitB12: 0, folate: 150, sodium: 61, potassium: 738, calcium: 208, phosphorus: 66, magnesium: 55, iron: 6.6, zinc: 0.9, copper: 0.1, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-556", name: "Eneldo seco", group: "2.21 Especias", sourceLink: "1",
        kcal: 253, protein: 20, carbs: 42.2, fats: 4.4,
        micros: { moisture: 7.3, ash: 12.6, sugars: 0, fiber: 13.6, saturatedFat: 0.23, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 293, vitC: 50, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.4, vitB2: 0.3, niacin: 2.8, vitB6: 1.7, pantothenicAcid: 0, vitB12: 0, folate: 208, sodium: 3308, potassium: 1784, calcium: 543, phosphorus: 451, magnesium: 48.8, iron: 3.3, zinc: 0.5, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-557", name: "Estragón seco", group: "2.21 Especias", sourceLink: "1",
        kcal: 295, protein: 22.8, carbs: 42.8, fats: 7.2,
        micros: { moisture: 7.7, ash: 12, sugars: 0, fiber: 7.4, saturatedFat: 1.88, monoFat: 0.47, polyFat: 3.7, transFat: 0, cholesterol: 0, vitA: 210, vitC: 50, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 1.3, niacin: 9, vitB6: 2.4, pantothenicAcid: 0, vitB12: 0, folate: 274, sodium: 62, potassium: 3020, calcium: 1139, phosphorus: 313, magnesium: 347, iron: 32.3, zinc: 3.9, copper: 0.7, selenium: 4.4, alcohol: 0 }
    },
    {
        id: "alim-558", name: "Hierbabuena", group: "2.21 Especias", sourceLink: "1",
        kcal: 70, protein: 3.8, carbs: 6.9, fats: 0.9,
        micros: { moisture: 78.7, ash: 1.8, sugars: 0, fiber: 8, saturatedFat: 0.25, monoFat: 0.03, polyFat: 0.51, transFat: 0, cholesterol: 0, vitA: 212, vitC: 31.8, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.3, niacin: 1.7, vitB6: 0.1, pantothenicAcid: 0.3, vitB12: 0, folate: 114, sodium: 31, potassium: 569, calcium: 243, phosphorus: 73, magnesium: 80, iron: 5.1, zinc: 1.1, copper: 0.3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-559", name: "Jengibre", group: "2.21 Especias", sourceLink: "1",
        kcal: 335, protein: 9, carbs: 57.5, fats: 4.2,
        micros: { moisture: 9.9, ash: 5.2, sugars: 3.4, fiber: 14.1, saturatedFat: 2.6, monoFat: 0.48, polyFat: 0.93, transFat: 0, cholesterol: 0, vitA: 2, vitC: 0.7, vitD: 0, vitE: 0, vitK: 0.8, vitB1: 0, vitB2: 0.2, niacin: 9.6, vitB6: 0.6, pantothenicAcid: 0.5, vitB12: 0, folate: 13, sodium: 27, potassium: 1320, calcium: 114, phosphorus: 168, magnesium: 214, iron: 19.8, zinc: 3.6, copper: 0.5, selenium: 55.8, alcohol: 0 }
    },
    {
        id: "alim-560", name: "Laurel", group: "2.21 Especias", sourceLink: "1",
        kcal: 313, protein: 7.6, carbs: 48.7, fats: 8.4,
        micros: { moisture: 5.4, ash: 3.6, sugars: 0, fiber: 26.3, saturatedFat: 2.28, monoFat: 1.64, polyFat: 2.29, transFat: 0, cholesterol: 0, vitA: 309, vitC: 46.5, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.4, niacin: 2, vitB6: 1.7, pantothenicAcid: 0, vitB12: 0, folate: 180, sodium: 23, potassium: 529, calcium: 834, phosphorus: 113, magnesium: 120, iron: 43, zinc: 3.7, copper: 0.4, selenium: 2.8, alcohol: 0 }
    },
    {
        id: "alim-561", name: "Locoto deshidratado", group: "2.21 Especias", sourceLink: "3",
        kcal: 363, protein: 9.6, carbs: 74.9, fats: 0,
        micros: { moisture: 4.2, ash: 8.5, sugars: 0, fiber: 2.8, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 227, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-562", name: "Locoto fresco", group: "2.21 Especias", sourceLink: "3",
        kcal: 23, protein: 1.5, carbs: 3.7, fats: 0.2,
        micros: { moisture: 90, ash: 0.2, sugars: 2.4, fiber: 4.4, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 20, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-563", name: "Menta verde fresca", group: "2.21 Especias", sourceLink: "1",
        kcal: 44, protein: 3.3, carbs: 1.6, fats: 0.7,
        micros: { moisture: 85.6, ash: 2, sugars: 0, fiber: 6.8, saturatedFat: 0.19, monoFat: 0.03, polyFat: 0.39, transFat: 0, cholesterol: 0, vitA: 203, vitC: 13.3, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 0.9, vitB6: 0.2, pantothenicAcid: 0.3, vitB12: 0, folate: 105, sodium: 30, potassium: 458, calcium: 199, phosphorus: 60, magnesium: 63, iron: 11.9, zinc: 1.1, copper: 0.2, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-564", name: "Menta verde seca", group: "2.21 Especias", sourceLink: "1",
        kcal: 285, protein: 19.9, carbs: 22.2, fats: 6,
        micros: { moisture: 11.3, ash: 10.7, sugars: 0, fiber: 29.8, saturatedFat: 1.58, monoFat: 0.21, polyFat: 3.26, transFat: 0, cholesterol: 0, vitA: 529, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 1.4, niacin: 6.6, vitB6: 2.6, pantothenicAcid: 1.4, vitB12: 0, folate: 530, sodium: 344, potassium: 1924, calcium: 1488, phosphorus: 276, magnesium: 602, iron: 87.5, zinc: 2.4, copper: 1.5, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-565", name: "Merkén", group: "2.21 Especias", sourceLink: "3",
        kcal: 156, protein: 10.2, carbs: 20.5, fats: 3.6,
        micros: { moisture: 11.7, ash: 21.7, sugars: 0, fiber: 32.3, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 7440, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-566", name: "Nuez moscada", group: "2.21 Especias", sourceLink: "1",
        kcal: 525, protein: 5.8, carbs: 28.5, fats: 36.3,
        micros: { moisture: 6.2, ash: 2.3, sugars: 3, fiber: 20.8, saturatedFat: 25.94, monoFat: 3.22, polyFat: 0.35, transFat: 0, cholesterol: 0, vitA: 5, vitC: 3, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.3, vitB2: 0.1, niacin: 1.3, vitB6: 0.2, pantothenicAcid: 0, vitB12: 0, folate: 76, sodium: 16, potassium: 350, calcium: 184, phosphorus: 213, magnesium: 183, iron: 3, zinc: 2.2, copper: 1, selenium: 1.6, alcohol: 0 }
    },
    {
        id: "alim-567", name: "Orégano seco", group: "2.21 Especias", sourceLink: "1",
        kcal: 265, protein: 9, carbs: 26.4, fats: 4.3,
        micros: { moisture: 9.9, ash: 7.9, sugars: 4.1, fiber: 42.5, saturatedFat: 1.55, monoFat: 0.72, polyFat: 1.37, transFat: 0, cholesterol: 0, vitA: 85, vitC: 2.3, vitD: 0, vitE: 18.3, vitK: 621.7, vitB1: 0.2, vitB2: 0.5, niacin: 4.6, vitB6: 1, pantothenicAcid: 0.9, vitB12: 0, folate: 237, sodium: 25, potassium: 1260, calcium: 1597, phosphorus: 148, magnesium: 270, iron: 36.8, zinc: 2.7, copper: 0.6, selenium: 4.5, alcohol: 0 }
    },
    {
        id: "alim-568", name: "Paprika", group: "2.21 Especias", sourceLink: "1",
        kcal: 282, protein: 14.1, carbs: 19.1, fats: 12.9,
        micros: { moisture: 11.2, ash: 7.7, sugars: 10.3, fiber: 34.9, saturatedFat: 2.14, monoFat: 1.7, polyFat: 7.77, transFat: 0, cholesterol: 0, vitA: 2463, vitC: 0.9, vitD: 0, vitE: 29.1, vitK: 80.3, vitB1: 0.3, vitB2: 1.2, niacin: 10.1, vitB6: 2.1, pantothenicAcid: 2.5, vitB12: 0, folate: 49, sodium: 68, potassium: 2280, calcium: 229, phosphorus: 314, magnesium: 178, iron: 21.1, zinc: 4.3, copper: 0.7, selenium: 6.3, alcohol: 0 }
    },
    {
        id: "alim-569", name: "Pimentón deshidratado", group: "2.21 Especias", sourceLink: "3",
        kcal: 249, protein: 8.3, carbs: 52.3, fats: 0.7,
        micros: { moisture: 14, ash: 4.3, sugars: 36, fiber: 20.4, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 42, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-570", name: "Perejil fresco", group: "2.21 Especias", sourceLink: "1",
        kcal: 36, protein: 2.97, carbs: 3.03, fats: 0.79,
        micros: { moisture: 87.71, ash: 2.2, sugars: 0.85, fiber: 3.3, saturatedFat: 0.132, monoFat: 0.295, polyFat: 0.124, transFat: 0, cholesterol: 0, vitA: 421, vitC: 133, vitD: 0, vitE: 0.75, vitK: 1640, vitB1: 0.086, vitB2: 0.098, niacin: 1.313, vitB6: 0.09, pantothenicAcid: 0.4, vitB12: 0, folate: 152, sodium: 56, potassium: 554, calcium: 138, phosphorus: 58, magnesium: 50, iron: 6.2, zinc: 1.07, copper: 0.149, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-571", name: "Perejil seco", group: "2.21 Especias", sourceLink: "1",
        kcal: 292, protein: 26.6, carbs: 23.9, fats: 5.5,
        micros: { moisture: 5.9, ash: 11.4, sugars: 7.3, fiber: 26.7, saturatedFat: 1.38, monoFat: 0.76, polyFat: 3.12, transFat: 0, cholesterol: 0, vitA: 97, vitC: 125, vitD: 0, vitE: 9, vitK: 1359.5, vitB1: 0.2, vitB2: 2.4, niacin: 9.9, vitB6: 0.9, pantothenicAcid: 1.1, vitB12: 0, folate: 180, sodium: 452, potassium: 2683, calcium: 1140, phosphorus: 436, magnesium: 400, iron: 22, zinc: 5.4, copper: 0.8, selenium: 14.1, alcohol: 0 }
    },
    {
        id: "alim-572", name: "Pimienta blanca", group: "2.21 Especias", sourceLink: "1",
        kcal: 296, protein: 10.4, carbs: 48.3, fats: 2.1,
        micros: { moisture: 11.4, ash: 1.6, sugars: 0, fiber: 26.2, saturatedFat: 0.63, monoFat: 0.79, polyFat: 0.62, transFat: 0, cholesterol: 0, vitA: 0, vitC: 21, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.1, niacin: 0.2, vitB6: 0.1, pantothenicAcid: 0, vitB12: 0, folate: 10, sodium: 5, potassium: 73, calcium: 265, phosphorus: 176, magnesium: 90, iron: 14.3, zinc: 1.1, copper: 0.9, selenium: 3.1, alcohol: 0 }
    },
    {
        id: "alim-573", name: "Pimienta negra", group: "2.21 Especias", sourceLink: "1",
        kcal: 251, protein: 10.4, carbs: 44.1, fats: 3.3,
        micros: { moisture: 12.5, ash: 4.5, sugars: 0.6, fiber: 25.3, saturatedFat: 1.39, monoFat: 0.74, polyFat: 1, transFat: 0, cholesterol: 0, vitA: 27, vitC: 0, vitD: 0, vitE: 1, vitK: 163.7, vitB1: 0.1, vitB2: 0.2, niacin: 1.1, vitB6: 0.3, pantothenicAcid: 1.4, vitB12: 0, folate: 17, sodium: 20, potassium: 1329, calcium: 443, phosphorus: 158, magnesium: 171, iron: 9.7, zinc: 1.2, copper: 1.3, selenium: 4.9, alcohol: 0 }
    },
    {
        id: "alim-574", name: "Pimienta roja", group: "2.21 Especias", sourceLink: "1",
        kcal: 318, protein: 12, carbs: 29.4, fats: 17.3,
        micros: { moisture: 8.1, ash: 6, sugars: 10.3, fiber: 27.2, saturatedFat: 3.26, monoFat: 2.75, polyFat: 8.37, transFat: 0, cholesterol: 0, vitA: 2081, vitC: 76.4, vitD: 0, vitE: 29.8, vitK: 80.3, vitB1: 0.3, vitB2: 0.9, niacin: 8.7, vitB6: 2.5, pantothenicAcid: 0, vitB12: 0, folate: 106, sodium: 30, potassium: 2014, calcium: 148, phosphorus: 293, magnesium: 152, iron: 7.8, zinc: 2.5, copper: 0.4, selenium: 8.8, alcohol: 0 }
    },
    {
        id: "alim-575", name: "Romero fresco", group: "2.21 Especias", sourceLink: "1",
        kcal: 131, protein: 3.3, carbs: 6.6, fats: 5.9,
        micros: { moisture: 67.8, ash: 2.4, sugars: 0, fiber: 14.1, saturatedFat: 2.84, monoFat: 1.16, polyFat: 0.9, transFat: 0, cholesterol: 0, vitA: 146, vitC: 21.8, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0.2, niacin: 0.9, vitB6: 0.3, pantothenicAcid: 0.8, vitB12: 0, folate: 109, sodium: 26, potassium: 668, calcium: 317, phosphorus: 66, magnesium: 91, iron: 6.7, zinc: 0.9, copper: 0.3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-576", name: "Romero seco", group: "2.21 Especias", sourceLink: "1",
        kcal: 331, protein: 4.9, carbs: 21.5, fats: 15.2,
        micros: { moisture: 9.3, ash: 6.5, sugars: 0, fiber: 42.6, saturatedFat: 7.37, monoFat: 3.01, polyFat: 2.34, transFat: 0, cholesterol: 0, vitA: 156, vitC: 61.2, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.5, vitB2: 0.4, niacin: 1, vitB6: 1.7, pantothenicAcid: 0, vitB12: 0, folate: 307, sodium: 50, potassium: 955, calcium: 1280, phosphorus: 70, magnesium: 220, iron: 29.3, zinc: 3.2, copper: 0.6, selenium: 4.6, alcohol: 0 }
    },
    {
        id: "alim-577", name: "Sal de mar", group: "2.21 Especias", sourceLink: "3",
        kcal: 0, protein: 0, carbs: 0, fats: 0,
        micros: { moisture: 5, ash: 95, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 35983, potassium: 114, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-578", name: "Sal de mesa", group: "2.21 Especias", sourceLink: "1",
        kcal: 0, protein: 0, carbs: 0, fats: 0,
        micros: { moisture: 0.2, ash: 99.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 35758, potassium: 8, calcium: 24, phosphorus: 0, magnesium: 1, iron: 0.3, zinc: 0.1, copper: 0, selenium: 0.1, alcohol: 0 }
    },
    {
        id: "alim-579", name: "Semilla de amapola", group: "2.21 Especias", sourceLink: "1",
        kcal: 525, protein: 18, carbs: 8.6, fats: 41.6,
        micros: { moisture: 6, ash: 6.4, sugars: 3, fiber: 19.5, saturatedFat: 5.52, monoFat: 5.98, polyFat: 28.57, transFat: 0, cholesterol: 0, vitA: 0, vitC: 1, vitD: 0, vitE: 1.8, vitK: 0, vitB1: 0.9, vitB2: 0.1, niacin: 0.9, vitB6: 0.2, pantothenicAcid: 0.3, vitB12: 0, folate: 82, sodium: 26, potassium: 719, calcium: 1438, phosphorus: 870, magnesium: 347, iron: 9.8, zinc: 7.9, copper: 1.6, selenium: 13.5, alcohol: 0 }
    },
    {
        id: "alim-580", name: "Semilla de comino", group: "2.21 Especias", sourceLink: "1",
        kcal: 375, protein: 17.8, carbs: 33.7, fats: 22.3,
        micros: { moisture: 8.1, ash: 7.6, sugars: 2.3, fiber: 10.5, saturatedFat: 1.54, monoFat: 14.04, polyFat: 3.28, transFat: 0, cholesterol: 0, vitA: 64, vitC: 7.7, vitD: 0, vitE: 3.3, vitK: 5.4, vitB1: 0.6, vitB2: 0.3, niacin: 4.6, vitB6: 0.4, pantothenicAcid: 0, vitB12: 0, folate: 10, sodium: 168, potassium: 1788, calcium: 931, phosphorus: 499, magnesium: 366, iron: 66.4, zinc: 4.8, copper: 0.9, selenium: 5.2, alcohol: 0 }
    },
    {
        id: "alim-581", name: "Semillas de hinojo", group: "2.21 Especias", sourceLink: "1",
        kcal: 345, protein: 15.8, carbs: 12.5, fats: 14.9,
        micros: { moisture: 8.8, ash: 8.2, sugars: 0, fiber: 39.8, saturatedFat: 0.48, monoFat: 9.91, polyFat: 1.69, transFat: 0, cholesterol: 0, vitA: 7, vitC: 21, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.4, vitB2: 0.4, niacin: 6.1, vitB6: 0.5, pantothenicAcid: 0, vitB12: 0, folate: 88, sodium: 1694, potassium: 1196, calcium: 487, phosphorus: 385, magnesium: 18.5, iron: 3.7, zinc: 1.1, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-582", name: "Semilla de mostaza", group: "2.21 Especias", sourceLink: "1",
        kcal: 508, protein: 26.1, carbs: 15.9, fats: 36.2,
        micros: { moisture: 5.3, ash: 4.3, sugars: 6.8, fiber: 12.2, saturatedFat: 1.99, monoFat: 22.52, polyFat: 10.09, transFat: 0, cholesterol: 0, vitA: 2, vitC: 7.1, vitD: 0, vitE: 5.1, vitK: 5.4, vitB1: 0.8, vitB2: 0.3, niacin: 4.7, vitB6: 0.4, pantothenicAcid: 0.8, vitB12: 0, folate: 162, sodium: 13, potassium: 738, calcium: 266, phosphorus: 828, magnesium: 370, iron: 9.2, zinc: 6.1, copper: 0.6, selenium: 208.1, alcohol: 0 }
    },
    {
        id: "alim-583", name: "Tomillo fresco", group: "2.21 Especias", sourceLink: "1",
        kcal: 101, protein: 5.6, carbs: 10.5, fats: 1.7,
        micros: { moisture: 65.1, ash: 3.2, sugars: 0, fiber: 14, saturatedFat: 0.47, monoFat: 0.08, polyFat: 0.53, transFat: 0, cholesterol: 0, vitA: 238, vitC: 160.1, vitD: 0, vitE: 0, vitK: 0, vitB1: 0.5, vitB2: 1.8, niacin: 0.3, vitB6: 0.4, pantothenicAcid: 0, vitB12: 0, folate: 45, sodium: 9, potassium: 609, calcium: 405, phosphorus: 106, magnesium: 160, iron: 17.5, zinc: 1.8, copper: 0.6, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-584", name: "Tomillo seco", group: "2.21 Especias", sourceLink: "1",
        kcal: 276, protein: 9.1, carbs: 26.9, fats: 7.4,
        micros: { moisture: 7.8, ash: 11.7, sugars: 1.7, fiber: 37, saturatedFat: 2.73, monoFat: 0.47, polyFat: 1.19, transFat: 0, cholesterol: 0, vitA: 190, vitC: 50, vitD: 0, vitE: 7.5, vitK: 1714.5, vitB1: 0.5, vitB2: 0.4, niacin: 4.9, vitB6: 0.6, pantothenicAcid: 0, vitB12: 0, folate: 274, sodium: 55, potassium: 814, calcium: 1890, phosphorus: 201, magnesium: 220, iron: 123.6, zinc: 6.2, copper: 0.9, selenium: 4.6, alcohol: 0 }
    },
    // Panginayon kadagiti Endulzantes ken Platos Preparados (Agregando Endulzantes y Platos Preparados)
    {
        id: "alim-585", name: "Endulzante agave líquido", group: "Endulzantes", sourceLink: "3",
        kcal: 153, protein: 0.1, carbs: 37.9, fats: 0,
        micros: { moisture: 61.9, ash: 0.1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 20, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-586", name: "Endulzante agave más sucralosa en tableta", group: "Endulzantes", sourceLink: "3",
        kcal: 371, protein: 0.4, carbs: 92.4, fats: 0,
        micros: { moisture: 6.7, ash: 0.5, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 177, potassium: 17, calcium: 8, phosphorus: 0.8, magnesium: 2, iron: 0.4, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-587", name: "Endulzante stevia líquido", group: "Endulzantes", sourceLink: "3",
        kcal: 49, protein: 0.1, carbs: 12.1, fats: 0,
        micros: { moisture: 87.2, ash: 0.6, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 70, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-588", name: "Endulzante sucralosa líquido", group: "Endulzantes", sourceLink: "3",
        kcal: 15, protein: 0, carbs: 3.7, fats: 0,
        micros: { moisture: 96.1, ash: 0.2, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0.9, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-589", name: "Carne asada arvejada", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 109, protein: 19.9, carbs: 1.2, fats: 2.7,
        micros: { moisture: 74.5, ash: 1.7, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 388, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-590", name: "Cebolla en escabeche", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 30, protein: 1.5, carbs: 4.5, fats: 0.7,
        micros: { moisture: 92.9, ash: 0.4, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 35, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-591", name: "Cerdo a la mostaza", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 151, protein: 23.8, carbs: 0.6, fats: 5.9,
        micros: { moisture: 68.2, ash: 1.5, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 385, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-592", name: "Crema de cebolla", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 22, protein: 0.3, carbs: 3.5, fats: 0.8,
        micros: { moisture: 94.4, ash: 1, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 361, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-593", name: "Lentejas c/ arroz", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 90, protein: 3.3, carbs: 10.3, fats: 4,
        micros: { moisture: 81.1, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 339, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-594", name: "Manzana asada", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 96, protein: 1.1, carbs: 20.2, fats: 1.2,
        micros: { moisture: 77.2, ash: 0.3, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 29, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-595", name: "Puré manzana", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 50, protein: 0.2, carbs: 12, fats: 0,
        micros: { moisture: 86.5, ash: 0.1, sugars: 1.1, fiber: 0.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0.3, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 6.9, potassium: 0, calcium: 0, phosphorus: 0.6, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-596", name: "Puré manzana plátano", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 58, protein: 0.4, carbs: 13.8, fats: 0,
        micros: { moisture: 84.1, ash: 0.2, sugars: 1.4, fiber: 0.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 11.4, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 6.5, potassium: 0, calcium: 0, phosphorus: 0.6, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-597", name: "Pure pera c/canela", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 64, protein: 0, carbs: 15.8, fats: 0,
        micros: { moisture: 80.6, ash: 0.2, sugars: 3.3, fiber: 0.1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 35, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-598", name: "Mariscal", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 87, protein: 12.2, carbs: 3.2, fats: 2.8,
        micros: { moisture: 79.8, ash: 1, sugars: 0.9, fiber: 1, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 216, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-599", name: "Pollo a la mostaza", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 121, protein: 21.8, carbs: 2.5, fats: 2.7,
        micros: { moisture: 71.7, ash: 1.3, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 358, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-600", name: "Sopa de sémola", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 16, protein: 0.6, carbs: 2.7, fats: 0.3,
        micros: { moisture: 95.6, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 268, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-601", name: "Tomate con papas", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 55, protein: 2.3, carbs: 10.3, fats: 0.5,
        micros: { moisture: 86.1, ash: 0.8, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 17, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-602", name: "Torta de durazno con crema", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 226, protein: 5.3, carbs: 35, fats: 7.2,
        micros: { moisture: 52.1, ash: 0.4, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 51, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-603", name: "Verduras guisadas", group: "2.23 Platos Preparados", sourceLink: "3",
        kcal: 54, protein: 2, carbs: 5.8, fats: 2.5,
        micros: { moisture: 88.2, ash: 1.5, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 369, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    // Panginayon kadagiti Alimentos con Formulaciones Especiales (Agregando Alimentos Especiales)
    {
        id: "alim-604", name: "Bebida láctea años dorados", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 400, protein: 18, carbs: 59.5, fats: 10,
        micros: { moisture: 0, ash: 0, sugars: 36, fiber: 1, saturatedFat: 1.2, monoFat: 5, polyFat: 2.1, transFat: 0, cholesterol: 19.4, vitA: 800, vitC: 180, vitD: 16, vitE: 32, vitK: 0, vitB1: 0.8, vitB2: 1.6, niacin: 10, vitB6: 1.6, pantothenicAcid: 0, vitB12: 2.8, folate: 80, sodium: 540, potassium: 0, calcium: 1000, phosphorus: 300, magnesium: 5.6, iron: 800, zinc: 12, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-605", name: "Crema años dorados arveja", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 400, protein: 13, carbs: 62.2, fats: 11,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 6, saturatedFat: 1.5, monoFat: 4.7, polyFat: 2.7, transFat: 0, cholesterol: 0, vitA: 240, vitC: 30, vitD: 8, vitE: 16, vitK: 0, vitB1: 0.4, vitB2: 0.4, niacin: 4.5, vitB6: 1, pantothenicAcid: 0, vitB12: 1.4, folate: 40, sodium: 247, potassium: 0, calcium: 400, phosphorus: 400, magnesium: 150, iron: 4.2, zinc: 3, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-606", name: "Crema años dorados espárrago", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 400, protein: 13, carbs: 62.2, fats: 11,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 6, saturatedFat: 1.6, monoFat: 4.5, polyFat: 3, transFat: 0.1, cholesterol: 0, vitA: 240, vitC: 30, vitD: 8, vitE: 16, vitK: 0, vitB1: 0.4, vitB2: 0.4, niacin: 4.5, vitB6: 1, pantothenicAcid: 0, vitB12: 1.4, folate: 40, sodium: 197, potassium: 0, calcium: 400, phosphorus: 400, magnesium: 150, iron: 4.2, zinc: 3, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-607", name: "Crema años dorados lentejas", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 400, protein: 13, carbs: 62.2, fats: 11,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 6, saturatedFat: 1.6, monoFat: 4.8, polyFat: 2.9, transFat: 0.1, cholesterol: 0, vitA: 240, vitC: 30, vitD: 8, vitE: 16, vitK: 0, vitB1: 0.4, vitB2: 0.4, niacin: 4.5, vitB6: 1, pantothenicAcid: 0, vitB12: 1.4, folate: 40, sodium: 240, potassium: 0, calcium: 400, phosphorus: 400, magnesium: 150, iron: 4.2, zinc: 3, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-608", name: "Crema años dorados verduras", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 400, protein: 13, carbs: 62.2, fats: 11,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 6, saturatedFat: 1.5, monoFat: 5, polyFat: 2.8, transFat: 0, cholesterol: 0, vitA: 240, vitC: 30, vitD: 8, vitE: 16, vitK: 0, vitB1: 0.4, vitB2: 0.4, niacin: 4.5, vitB6: 1, pantothenicAcid: 0, vitB12: 1.4, folate: 40, sodium: 241, potassium: 0, calcium: 400, phosphorus: 400, magnesium: 150, iron: 4.2, zinc: 3, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-609", name: "Cyclinex 1º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 510, protein: 7.5, carbs: 57, fats: 24.6,
        micros: { moisture: 0, ash: 0, sugars: 5.3, fiber: 0, saturatedFat: 10.2, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 480, vitC: 60, vitD: 7.5, vitE: 11.4, vitK: 60, vitB1: 2, vitB2: 1, niacin: 12, vitB6: 0.9, pantothenicAcid: 7.8, vitB12: 5.6, folate: 250, sodium: 215, potassium: 760, calcium: 650, phosphorus: 455, magnesium: 55, iron: 10, zinc: 9.5, copper: 1.3, selenium: 25, alcohol: 0 }
    },
    {
        id: "alim-610", name: "Cyclinex 2º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 440, protein: 15, carbs: 45, fats: 17,
        micros: { moisture: 0, ash: 0, sugars: 3.8, fiber: 0, saturatedFat: 7.7, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 908, vitC: 75, vitD: 8.1, vitE: 16.1, vitK: 70, vitB1: 4, vitB2: 2.4, niacin: 21, vitB6: 1.8, pantothenicAcid: 10.9, vitB12: 7.3, folate: 530, sodium: 1175, potassium: 1800, calcium: 1150, phosphorus: 1020, magnesium: 300, iron: 17, zinc: 17, copper: 1.3, selenium: 37, alcohol: 0 }
    },
    {
        id: "alim-611", name: "Dialmine", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 360, protein: 25, carbs: 65, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 59, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 125, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 10, potassium: 10, calcium: 5, phosphorus: 5, magnesium: 5, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-612", name: "Essential aminoacid mix", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 316, protein: 79, carbs: 0, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitB1: 0, vitB2: 0, niacin: 0, vitB6: 0, pantothenicAcid: 0, vitB12: 0, folate: 0, sodium: 0, potassium: 0, calcium: 0, phosphorus: 0, magnesium: 0, iron: 0, zinc: 0, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-613", name: "GA 1 Anamix Infant", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 466, protein: 13.1, carbs: 49.8, fats: 23,
        micros: { moisture: 0, ash: 0, sugars: 7.3, fiber: 3.7, saturatedFat: 7.5, monoFat: 9.4, polyFat: 5, transFat: 0, cholesterol: 0, vitA: 392, vitC: 49, vitD: 8.7, vitE: 4.6, vitK: 37.2, vitB1: 0.5, vitB2: 0.5, niacin: 2.2, vitB6: 0.5, pantothenicAcid: 2.8, vitB12: 1.2, folate: 55, sodium: 191, potassium: 501, calcium: 410, phosphorus: 300, magnesium: 58, iron: 8.1, zinc: 5.7, copper: 0.4, selenium: 15.5, alcohol: 0 }
    },
    {
        id: "alim-614", name: "Glutarex 1º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 480, protein: 15, carbs: 53, fats: 21.7,
        micros: { moisture: 0, ash: 0, sugars: 4.8, fiber: 0, saturatedFat: 9.1, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 420, vitC: 50, vitD: 7.5, vitE: 10.1, vitK: 50, vitB1: 1.9, vitB2: 0.9, niacin: 10, vitB6: 0.8, pantothenicAcid: 6.9, vitB12: 4.9, folate: 230, sodium: 190, potassium: 675, calcium: 575, phosphorus: 400, magnesium: 50, iron: 9, zinc: 8, copper: 1.1, selenium: 20, alcohol: 0 }
    },
    {
        id: "alim-615", name: "Glutarex 2º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 410, protein: 30, carbs: 35, fats: 13,
        micros: { moisture: 0, ash: 0, sugars: 2.9, fiber: 0, saturatedFat: 5.8, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 666, vitC: 60, vitD: 7.5, vitE: 12.1, vitK: 60, vitB1: 3.3, vitB2: 1.8, niacin: 16, vitB6: 1.3, pantothenicAcid: 8, vitB12: 5, folate: 430, sodium: 880, potassium: 1370, calcium: 880, phosphorus: 760, magnesium: 225, iron: 13, zinc: 13, copper: 1, selenium: 35, alcohol: 0 }
    },
    {
        id: "alim-616", name: "IVA Anamix", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 457, protein: 30, carbs: 35, fats: 23,
        micros: { moisture: 0, ash: 0, sugars: 2.9, fiber: 0, saturatedFat: 7.5, monoFat: 9.4, polyFat: 5, transFat: 0, cholesterol: 0, vitA: 392, vitC: 49, vitD: 8.7, vitE: 4.6, vitK: 37.2, vitB1: 0.5, vitB2: 0.5, niacin: 2.2, vitB6: 0.5, pantothenicAcid: 2.8, vitB12: 1.2, folate: 55, sodium: 191, potassium: 501, calcium: 410, phosphorus: 300, magnesium: 58, iron: 8.1, zinc: 5.7, copper: 0.4, selenium: 15.5, alcohol: 0 }
    },
    {
        id: "alim-617", name: "Ketonex 1º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 480, protein: 15, carbs: 53, fats: 21.7,
        micros: { moisture: 0, ash: 0, sugars: 5, fiber: 0, saturatedFat: 10.2, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 925, vitC: 194, vitD: 10.8, vitE: 14, vitK: 100, vitB1: 2.8, vitB2: 1.4, niacin: 19.2, vitB6: 1, pantothenicAcid: 10, vitB12: 14.4, folate: 392, sodium: 226, potassium: 770, calcium: 969, phosphorus: 459, magnesium: 74, iron: 11, zinc: 10, copper: 1.4, selenium: 30, alcohol: 0 }
    },
    {
        id: "alim-618", name: "Ketonex 2º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 410, protein: 30, carbs: 35, fats: 14,
        micros: { moisture: 0, ash: 0, sugars: 3.3, fiber: 0, saturatedFat: 5.7, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 856, vitC: 234, vitD: 12.8, vitE: 17.1, vitK: 107, vitB1: 4.3, vitB2: 3, niacin: 40, vitB6: 2.1, pantothenicAcid: 0, vitB12: 10, folate: 648, sodium: 58, potassium: 50, calcium: 1126, phosphorus: 947, magnesium: 301, iron: 21, zinc: 23, copper: 3.1, selenium: 58, alcohol: 0 }
    },
    {
        id: "alim-619", name: "Leche continuación", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 490, protein: 16, carbs: 57, fats: 22,
        micros: { moisture: 2, ash: 3.7, sugars: 57, fiber: 1.5, saturatedFat: 8.1, monoFat: 7.4, polyFat: 4.2, transFat: 0.1, cholesterol: 26, vitA: 434, vitC: 63, vitD: 9.2, vitE: 5.1, vitK: 25, vitB1: 0.4, vitB2: 1, niacin: 2.9, vitB6: 0.3, pantothenicAcid: 2.6, vitB12: 1.3, folate: 59, sodium: 246, potassium: 0, calcium: 559, phosphorus: 375, magnesium: 63, iron: 8.8, zinc: 3.1, copper: 0.2, selenium: 20, alcohol: 0 }
    },
    {
        id: "alim-620", name: "Fórmula láctea prematuro(1)", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 524, protein: 14, carbs: 54, fats: 28,
        micros: { moisture: 1.6, ash: 3, sugars: 45, fiber: 0, saturatedFat: 10, monoFat: 9.3, polyFat: 4.6, transFat: 0.2, cholesterol: 33, vitA: 717, vitC: 78, vitD: 11, vitE: 11, vitK: 45, vitB1: 0.8, vitB2: 1.2, niacin: 0, vitB6: 0.6, pantothenicAcid: 2.9, vitB12: 1.6, folate: 104, sodium: 193, potassium: 504, calcium: 521, phosphorus: 300, magnesium: 47, iron: 8.9, zinc: 5.2, copper: 0.4, selenium: 11, alcohol: 0 }
    },
    {
        id: "alim-621", name: "Fórmula láctea prematuro(2)", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 498, protein: 14.4, carbs: 53.2, fats: 25.9,
        micros: { moisture: 3, ash: 3.5, sugars: 26, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1080, vitC: 98, vitD: 15.2, vitE: 16, vitK: 32, vitB1: 0.7, vitB2: 1, niacin: 11.9, vitB6: 0.6, pantothenicAcid: 4.8, vitB12: 1.9, folate: 210, sodium: 269, potassium: 514, calcium: 648, phosphorus: 377, magnesium: 42, iron: 8.5, zinc: 5.5, copper: 0.6, selenium: 9, alcohol: 0 }
    },
    {
        id: "alim-622", name: "Fórmula láctea Purita Cereal", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 454, protein: 19.4, carbs: 51.2, fats: 19.1,
        micros: { moisture: 0, ash: 0, sugars: 36.8, fiber: 1.7, saturatedFat: 7.9, monoFat: 8.3, polyFat: 2.9, transFat: 0, cholesterol: 56.3, vitA: 538, vitC: 65.8, vitD: 8.6, vitE: 10.2, vitK: 0, vitB1: 0.4, vitB2: 0.7, niacin: 5.9, vitB6: 0.8, pantothenicAcid: 0, vitB12: 1.9, folate: 167, sodium: 207, potassium: 0, calcium: 1066, phosphorus: 644, magnesium: 92.6, iron: 7.1, zinc: 6.7, copper: 0.3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-623", name: "Leche Purita Fortificada", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 498, protein: 25.8, carbs: 38.5, fats: 26.7,
        micros: { moisture: 0, ash: 0, sugars: 40.3, fiber: 0, saturatedFat: 16.8, monoFat: 8.7, polyFat: 1.2, transFat: 0.1, cholesterol: 95.2, vitA: 276, vitC: 76.4, vitD: 3.4, vitE: 0.5, vitK: 0, vitB1: 0.3, vitB2: 1.9, niacin: 1.2, vitB6: 0.4, pantothenicAcid: 3, vitB12: 3.5, folate: 42.5, sodium: 244, potassium: 0, calcium: 980, phosphorus: 793, magnesium: 75, iron: 11.3, zinc: 5.5, copper: 0.4, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-624", name: "Bebida láctea Purita Mamá", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 391, protein: 21.3, carbs: 55.4, fats: 9.3,
        micros: { moisture: 0, ash: 0, sugars: 37, fiber: 1.2, saturatedFat: 1.9, monoFat: 4.6, polyFat: 2.7, transFat: 0.1, cholesterol: 29.7, vitA: 622, vitC: 156, vitD: 5.4, vitE: 30.8, vitK: 0, vitB1: 1.7, vitB2: 2.2, niacin: 21.7, vitB6: 2.4, pantothenicAcid: 0, vitB12: 6.2, folate: 631, sodium: 228, potassium: 0, calcium: 1409, phosphorus: 1280, magnesium: 258, iron: 0, zinc: 7.6, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-625", name: "Sopa crema de ave Mi sopita", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 411, protein: 12, carbs: 57, fats: 15,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 4, saturatedFat: 1.9, monoFat: 9.5, polyFat: 4.6, transFat: 0.2, cholesterol: 0, vitA: 326, vitC: 35, vitD: 4.4, vitE: 4, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 1.8, vitB6: 0.1, pantothenicAcid: 0, vitB12: 1.5, folate: 40, sodium: 230, potassium: 0, calcium: 400, phosphorus: 320, magnesium: 72, iron: 5, zinc: 4, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-626", name: "Sopa crema de legumbres Mi sopita", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 411, protein: 12, carbs: 57, fats: 15,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 4, saturatedFat: 1.9, monoFat: 9.5, polyFat: 4.6, transFat: 0.2, cholesterol: 0, vitA: 326, vitC: 35, vitD: 4.4, vitE: 4, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 1.8, vitB6: 0.1, pantothenicAcid: 0, vitB12: 1.5, folate: 40, sodium: 230, potassium: 0, calcium: 400, phosphorus: 320, magnesium: 72, iron: 5, zinc: 4, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-627", name: "Sopa crema de verduras Mi sopita", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 415, protein: 12.5, carbs: 57.5, fats: 15,
        micros: { moisture: 0, ash: 0, sugars: 5, fiber: 4.2, saturatedFat: 4.2, monoFat: 7, polyFat: 3.8, transFat: 0, cholesterol: 0, vitA: 326, vitC: 35, vitD: 4.4, vitE: 4, vitK: 0, vitB1: 0.1, vitB2: 0.2, niacin: 1.8, vitB6: 0.1, pantothenicAcid: 0, vitB12: 1.5, folate: 40, sodium: 230, potassium: 0, calcium: 400, phosphorus: 320, magnesium: 72, iron: 5, zinc: 4, copper: 0, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-628", name: "MMA - PA Anamix Infant", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 466, protein: 13.1, carbs: 49.8, fats: 23,
        micros: { moisture: 0, ash: 0, sugars: 7.3, fiber: 3.7, saturatedFat: 7.5, monoFat: 9.4, polyFat: 5, transFat: 0, cholesterol: 0, vitA: 392, vitC: 49, vitD: 8.7, vitE: 4.6, vitK: 37.2, vitB1: 0.5, vitB2: 0.5, niacin: 2.2, vitB6: 0.5, pantothenicAcid: 2.8, vitB12: 1.2, folate: 55, sodium: 191, potassium: 501, calcium: 410, phosphorus: 300, magnesium: 58, iron: 8.1, zinc: 5.7, copper: 0.4, selenium: 15.5, alcohol: 0 }
    },
    {
        id: "alim-629", name: "Monogen", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 420, protein: 12.5, carbs: 68, fats: 11,
        micros: { moisture: 0, ash: 0, sugars: 6.7, fiber: 0, saturatedFat: 9.2, monoFat: 0.6, polyFat: 0.6, transFat: 0, cholesterol: 0, vitA: 325, vitC: 35, vitD: 6.6, vitE: 2.8, vitK: 21, vitB1: 0.4, vitB2: 0.5, niacin: 3.9, vitB6: 0.4, pantothenicAcid: 1.5, vitB12: 0.9, folate: 47, sodium: 200, potassium: 360, calcium: 257, phosphorus: 200, magnesium: 35, iron: 4.2, zinc: 3.3, copper: 0.3, selenium: 10.8, alcohol: 0 }
    },
    {
        id: "alim-630", name: "MSUD Anamix Infant", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 457, protein: 13.1, carbs: 49.5, fats: 23,
        micros: { moisture: 0, ash: 0, sugars: 7.4, fiber: 5.3, saturatedFat: 7.5, monoFat: 9.4, polyFat: 5, transFat: 0, cholesterol: 0, vitA: 392, vitC: 49, vitD: 8.7, vitE: 4.6, vitK: 37.2, vitB1: 0.5, vitB2: 0.5, niacin: 2.2, vitB6: 0.5, pantothenicAcid: 2.8, vitB12: 1.2, folate: 55, sodium: 191, potassium: 501, calcium: 410, phosphorus: 300, magnesium: 58, iron: 8.1, zinc: 5.7, copper: 0.4, selenium: 15.5, alcohol: 0 }
    },
    {
        id: "alim-631", name: "MSUD Maxamaid", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 309, protein: 25, carbs: 51, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 4.6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 525, vitC: 135, vitD: 12, vitE: 4.4, vitK: 30, vitB1: 1.1, vitB2: 1.2, niacin: 12, vitB6: 1.4, pantothenicAcid: 3.7, vitB12: 3.9, folate: 240, sodium: 580, potassium: 840, calcium: 810, phosphorus: 810, magnesium: 200, iron: 12, zinc: 13, copper: 1.8, selenium: 40, alcohol: 0 }
    },
    {
        id: "alim-632", name: "MSUD Maxamum", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 297, protein: 39, carbs: 34, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 3.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 710, vitC: 90, vitD: 7.8, vitE: 5.2, vitK: 70, vitB1: 1.4, vitB2: 1.4, niacin: 13.6, vitB6: 2.1, pantothenicAcid: 5, vitB12: 3.6, folate: 500, sodium: 560, potassium: 700, calcium: 670, phosphorus: 670, magnesium: 285, iron: 23.5, zinc: 13.6, copper: 1.4, selenium: 50, alcohol: 0 }
    },
    {
        id: "alim-633", name: "MSUD Med A Plus", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 289, protein: 50, carbs: 22, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 3790, vitC: 379, vitD: 47, vitE: 43, vitK: 105, vitB1: 2, vitB2: 4.3, niacin: 25, vitB6: 2.4, pantothenicAcid: 17, vitB12: 5.5, folate: 299, sodium: 597, potassium: 2674, calcium: 2346, phosphorus: 1260, magnesium: 299, iron: 29, zinc: 25, copper: 1.6, selenium: 71, alcohol: 0 }
    },
    {
        id: "alim-634", name: "MSUD Med B Plus", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 291, protein: 62.1, carbs: 10.7, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1200, vitC: 68, vitD: 18.6, vitE: 21.7, vitK: 168, vitB1: 2.1, vitB2: 2.8, niacin: 28, vitB6: 1.9, pantothenicAcid: 17, vitB12: 3.7, folate: 311, sodium: 556, potassium: 1255, calcium: 2063, phosphorus: 1217, magnesium: 302, iron: 28, zinc: 19, copper: 2.2, selenium: 75, alcohol: 0 }
    },
    {
        id: "alim-635", name: "Oac Med B Plus", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 290, protein: 63.2, carbs: 9.2, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1270, vitC: 171, vitD: 19, vitE: 22.1, vitK: 70, vitB1: 2.1, vitB2: 2.8, niacin: 29, vitB6: 1.9, pantothenicAcid: 16.8, vitB12: 3.8, folate: 316, sodium: 566, potassium: 1277, calcium: 2099, phosphorus: 1240, magnesium: 307, iron: 28.5, zinc: 19, copper: 2.2, selenium: 76, alcohol: 0 }
    },
    {
        id: "alim-636", name: "P-AM 2º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 310, protein: 77.5, carbs: 0, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1400, vitC: 0, vitD: 9, vitE: 18, vitK: 60, vitB1: 2.7, vitB2: 2.5, niacin: 24, vitB6: 2.5, pantothenicAcid: 13, vitB12: 5, folate: 300, sodium: 0, potassium: 1347, calcium: 1308, phosphorus: 934, magnesium: 187, iron: 25, zinc: 21, copper: 3, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-637", name: "Phenex 1º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 480, protein: 16.6, carbs: 53, fats: 23.6,
        micros: { moisture: 0, ash: 0, sugars: 4.9, fiber: 0, saturatedFat: 8.5, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 936, vitC: 192, vitD: 10.8, vitE: 13.7, vitK: 97, vitB1: 2.7, vitB2: 1.3, niacin: 18.8, vitB6: 1, pantothenicAcid: 9.8, vitB12: 10.9, folate: 374, sodium: 223, potassium: 755, calcium: 683, phosphorus: 451, magnesium: 73, iron: 10, zinc: 10, copper: 1.3, selenium: 29, alcohol: 0 }
    },
    {
        id: "alim-638", name: "Phenex 2º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 410, protein: 30, carbs: 35, fats: 14,
        micros: { moisture: 0, ash: 0, sugars: 3.1, fiber: 0, saturatedFat: 5.5, monoFat: 4.8, polyFat: 3, transFat: 0, cholesterol: 0, vitA: 936, vitC: 212, vitD: 11.9, vitE: 16.3, vitK: 100, vitB1: 3.9, vitB2: 2.6, niacin: 35, vitB6: 1.7, pantothenicAcid: 15.8, vitB12: 12.3, folate: 554, sodium: 1055, potassium: 1716, calcium: 1103, phosphorus: 901, magnesium: 302, iron: 19, zinc: 19, copper: 2.6, selenium: 47, alcohol: 0 }
    },
    {
        id: "alim-639", name: "PKU 2 Nutri Concentrated", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 280, protein: 60, carbs: 10, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0.4, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1200, vitC: 180, vitD: 18, vitE: 21, vitK: 57, vitB1: 1.8, vitB2: 2.4, niacin: 12.6, vitB6: 2.7, pantothenicAcid: 11.4, vitB12: 3.6, folate: 288, sodium: 540, potassium: 1200, calcium: 2300, phosphorus: 1380, magnesium: 300, iron: 30, zinc: 30, copper: 2.1, selenium: 50, alcohol: 0 }
    },
    {
        id: "alim-640", name: "PKU 2 Nutri Energy", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 402, protein: 27, carbs: 42, fats: 14,
        micros: { moisture: 0, ash: 0, sugars: 4.7, fiber: 0, saturatedFat: 1.6, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 500, vitC: 62.5, vitD: 12, vitE: 9.6, vitK: 48, vitB1: 0.8, vitB2: 0.8, niacin: 10.8, vitB6: 0, pantothenicAcid: 3.2, vitB12: 2, folate: 240, sodium: 636, potassium: 914, calcium: 883, phosphorus: 883, magnesium: 140, iron: 15.3, zinc: 12, copper: 1.2, selenium: 45.6, alcohol: 0 }
    },
    {
        id: "alim-641", name: "PKU Anamix Infant", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 457, protein: 13.1, carbs: 49.5, fats: 23,
        micros: { moisture: 0, ash: 0, sugars: 7.4, fiber: 5.3, saturatedFat: 7.5, monoFat: 9.4, polyFat: 5, transFat: 0, cholesterol: 0, vitA: 392, vitC: 49, vitD: 8.7, vitE: 4.6, vitK: 37.2, vitB1: 0.5, vitB2: 0.5, niacin: 2.2, vitB6: 0.5, pantothenicAcid: 2.8, vitB12: 1.2, folate: 55, sodium: 191, potassium: 501, calcium: 410, phosphorus: 300, magnesium: 58, iron: 8.1, zinc: 5.7, copper: 0.4, selenium: 15.5, alcohol: 0 }
    },
    {
        id: "alim-642", name: "PKU Med B Fórmula", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 424, protein: 31.1, carbs: 40.6, fats: 15,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 6.3, monoFat: 6.7, polyFat: 2, transFat: 0, cholesterol: 0, vitA: 623, vitC: 84, vitD: 9.3, vitE: 11, vitK: 34, vitB1: 1, vitB2: 1.4, niacin: 14, vitB6: 0.9, pantothenicAcid: 8.3, vitB12: 1.9, folate: 155, sodium: 278, potassium: 628, calcium: 1033, phosphorus: 610, magnesium: 151, iron: 14, zinc: 9.3, copper: 1.1, selenium: 37, alcohol: 0 }
    },
    {
        id: "alim-643", name: "PKU Med C Plus", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 302, protein: 75, carbs: 0.4, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1500, vitC: 150, vitD: 7.5, vitE: 23, vitK: 113, vitB1: 2.3, vitB2: 2.3, niacin: 26, vitB6: 2.6, pantothenicAcid: 9.4, vitB12: 4.5, folate: 773, sodium: 20, potassium: 1347, calcium: 1502, phosphorus: 1038, magnesium: 375, iron: 23, zinc: 19, copper: 1.4, selenium: 60, alcohol: 0 }
    },
    {
        id: "alim-644", name: "Portagen", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 470, protein: 16.5, carbs: 54, fats: 22,
        micros: { moisture: 3, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 4, vitA: 1111, vitC: 38, vitD: 9.3, vitE: 9.8, vitK: 74, vitB1: 0.7, vitB2: 0.9, niacin: 9.8, vitB6: 1, pantothenicAcid: 4.9, vitB12: 2.9, folate: 74, sodium: 260, potassium: 590, calcium: 440, phosphorus: 330, magnesium: 98, iron: 8.8, zinc: 4.4, copper: 0.7, selenium: 0, alcohol: 0 }
    },
    {
        id: "alim-645", name: "Propimex 1º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 495, protein: 17.3, carbs: 54, fats: 23.5,
        micros: { moisture: 0, ash: 0, sugars: 4.8, fiber: 0, saturatedFat: 9.2, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 902, vitC: 181, vitD: 10.9, vitE: 13.8, vitK: 94, vitB1: 2.7, vitB2: 1.2, niacin: 18.6, vitB6: 0.9, pantothenicAcid: 8.8, vitB12: 7.4, folate: 361, sodium: 223, potassium: 747, calcium: 678, phosphorus: 470, magnesium: 66, iron: 10, zinc: 10, copper: 1.4, selenium: 26, alcohol: 0 }
    },
    {
        id: "alim-646", name: "Propimex 2º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 434, protein: 33.5, carbs: 42.9, fats: 14.3,
        micros: { moisture: 0, ash: 0, sugars: 3, fiber: 0, saturatedFat: 5.8, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1253, vitC: 229, vitD: 13.1, vitE: 16.1, vitK: 101.1, vitB1: 4.7, vitB2: 2.3, niacin: 34.5, vitB6: 1.8, pantothenicAcid: 15.7, vitB12: 11.7, folate: 558, sodium: 1003, potassium: 1542, calcium: 1004, phosphorus: 857, magnesium: 268, iron: 17, zinc: 18, copper: 2.4, selenium: 47, alcohol: 0 }
    },
    {
        id: "alim-647", name: "Try 3 Advanta", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 297, protein: 70, carbs: 4.2, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 0, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 575, vitC: 65, vitD: 6, vitE: 9.5, vitK: 62, vitB1: 1.2, vitB2: 1.3, niacin: 15.1, vitB6: 1.3, pantothenicAcid: 5.3, vitB12: 3, folate: 215, sodium: 3, potassium: 1275, calcium: 1375, phosphorus: 685, magnesium: 355, iron: 13.4, zinc: 15.5, copper: 0.5, selenium: 45, alcohol: 0 }
    },
    {
        id: "alim-648", name: "Tyrex 1º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 498, protein: 16.3, carbs: 54, fats: 24.3,
        micros: { moisture: 0, ash: 0, sugars: 5, fiber: 0, saturatedFat: 10.2, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 954, vitC: 187, vitD: 11.4, vitE: 14.5, vitK: 85, vitB1: 2.8, vitB2: 1.3, niacin: 18.9, vitB6: 1, pantothenicAcid: 9.9, vitB12: 7.6, folate: 381, sodium: 229, potassium: 772, calcium: 704, phosphorus: 487, magnesium: 68, iron: 10, zinc: 11, copper: 1.4, selenium: 28, alcohol: 0 }
    },
    {
        id: "alim-649", name: "Tyrex 2º", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 440, protein: 33.1, carbs: 41.5, fats: 15.8,
        micros: { moisture: 0, ash: 0, sugars: 3.3, fiber: 0, saturatedFat: 5.7, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 1380, vitC: 240, vitD: 14.4, vitE: 17.4, vitK: 101, vitB1: 5.1, vitB2: 2.4, niacin: 34.5, vitB6: 1.9, pantothenicAcid: 15.7, vitB12: 11.7, folate: 558, sodium: 1093, potassium: 1675, calcium: 1117, phosphorus: 960, magnesium: 299, iron: 19, zinc: 21, copper: 3, selenium: 47, alcohol: 0 }
    },
    {
        id: "alim-650", name: "XLEU Maxmaid", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 309, protein: 25, carbs: 51, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 4.6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 525, vitC: 135, vitD: 12, vitE: 4.4, vitK: 30, vitB1: 1.1, vitB2: 1.2, niacin: 20.8, vitB6: 1.4, pantothenicAcid: 3.7, vitB12: 3.9, folate: 240, sodium: 580, potassium: 840, calcium: 810, phosphorus: 810, magnesium: 200, iron: 12, zinc: 13, copper: 1.8, selenium: 40, alcohol: 0 }
    },
    {
        id: "alim-651", name: "XLEU Maxamum", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 297, protein: 39, carbs: 34, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 3.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 710, vitC: 90, vitD: 7.8, vitE: 5.2, vitK: 70, vitB1: 1.4, vitB2: 1.4, niacin: 27.4, vitB6: 2.1, pantothenicAcid: 5, vitB12: 3.6, folate: 500, sodium: 560, potassium: 700, calcium: 670, phosphorus: 670, magnesium: 285, iron: 23.5, zinc: 13.6, copper: 1.4, selenium: 50, alcohol: 0 }
    },
    {
        id: "alim-652", name: "XLYS LOWTRY Maxmaid", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 309, protein: 25, carbs: 51, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 4.6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 525, vitC: 135, vitD: 12, vitE: 4.4, vitK: 30, vitB1: 1.1, vitB2: 1.2, niacin: 12, vitB6: 1.4, pantothenicAcid: 3.7, vitB12: 3.9, folate: 240, sodium: 580, potassium: 840, calcium: 810, phosphorus: 810, magnesium: 200, iron: 12, zinc: 13, copper: 1.8, selenium: 40, alcohol: 0 }
    },
    {
        id: "alim-653", name: "XLYS LOWTRY Maxmamum", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 297, protein: 39, carbs: 34, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 3.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 710, vitC: 90, vitD: 7.8, vitE: 5.2, vitK: 70, vitB1: 1.4, vitB2: 1.4, niacin: 13.6, vitB6: 2.1, pantothenicAcid: 5, vitB12: 3.6, folate: 500, sodium: 560, potassium: 700, calcium: 670, phosphorus: 670, magnesium: 285, iron: 23.5, zinc: 13.6, copper: 1.4, selenium: 50, alcohol: 0 }
    },
    {
        id: "alim-654", name: "XMTVI Maxamum", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 297, protein: 39, carbs: 34, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 3.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 710, vitC: 90, vitD: 7.8, vitE: 5.2, vitK: 70, vitB1: 1.4, vitB2: 1.4, niacin: 13.6, vitB6: 2.1, pantothenicAcid: 5, vitB12: 3.6, folate: 500, sodium: 560, potassium: 700, calcium: 670, phosphorus: 670, magnesium: 285, iron: 23.5, zinc: 13.6, copper: 1.4, selenium: 50, alcohol: 0 }
    },
    {
        id: "alim-655", name: "XP Maxamaid", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 309, protein: 25, carbs: 51, fats: 0,
        micros: { moisture: 0, ash: 0, sugars: 4.6, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 525, vitC: 135, vitD: 12, vitE: 4.4, vitK: 30, vitB1: 1.8, vitB2: 1.2, niacin: 12, vitB6: 1.4, pantothenicAcid: 3.7, vitB12: 3.9, folate: 240, sodium: 580, potassium: 840, calcium: 810, phosphorus: 810, magnesium: 200, iron: 12, zinc: 13, copper: 0, selenium: 40, alcohol: 0 }
    },
    {
        id: "alim-656", name: "XP Maxamum", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 297, protein: 39, carbs: 34, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 3.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 710, vitC: 90, vitD: 7.8, vitE: 5.2, vitK: 70, vitB1: 1.4, vitB2: 1.4, niacin: 13.6, vitB6: 2.1, pantothenicAcid: 5, vitB12: 3.6, folate: 500, sodium: 560, potassium: 700, calcium: 670, phosphorus: 670, magnesium: 285, iron: 23.5, zinc: 13.6, copper: 1.4, selenium: 50, alcohol: 0 }
    },
    {
        id: "alim-657", name: "XPHEN TYR Maxamum", group: "Alimentos con Formulaciones Especiales", sourceLink: "4",
        kcal: 297, protein: 39, carbs: 34, fats: 0.5,
        micros: { moisture: 0, ash: 0, sugars: 3.1, fiber: 0, saturatedFat: 0, monoFat: 0, polyFat: 0, transFat: 0, cholesterol: 0, vitA: 710, vitC: 90, vitD: 7.8, vitE: 5.2, vitK: 70, vitB1: 1.4, vitB2: 1.4, niacin: 13.6, vitB6: 2.1, pantothenicAcid: 5, vitB12: 3.6, folate: 500, sodium: 560, potassium: 700, calcium: 670, phosphorus: 670, magnesium: 285, iron: 23.5, zinc: 13.6, copper: 1.4, selenium: 50, alcohol: 0 }
    }
];

// Moñepyrũmby oñembohasa hagua umi marandu (Obligatorio para leer los datos)
window.ALIMENTOS_PRECARGADOS = ALIMENTOS_PRECARGADOS;