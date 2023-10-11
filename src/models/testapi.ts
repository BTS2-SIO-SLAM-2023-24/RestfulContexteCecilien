import Employe, { EmployeModel } from './Employe';

// Créez un employé avec une date de naissance
const employe: EmployeModel = new Employe({
    nom: 'John',
    prenom: 'Doe',
    dateNaissance: new Date('1990-05-15') // Date de naissance de l'employé
});

// Utilisez la méthode pour calculer l'âge
const age: number = employe.calculerAge();
console.log(`L'âge de l'employé est ${age} ans.`);
