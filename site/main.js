/* globals document, window */

import { initDossierCard } from './lib/dossiercards.js';
import { showDossierFile, closeDossierFile } from './lib/dossierfile.js';

// Ordered lists of instructor and student names.
const instructorNames = [
  'mjumbepoe',
  'jingyili',
];
const studentNames = [
  'yuewendai',
  'micahepstein',
  'henrycfeinstein',
  'morgancharlesowaingriffiths',
  'charleschristopherhuemmler',
  'yuhaojia',
  'minwookkang',
  'benjaminkeel',
  'yingxueou',
  'stutisingh',
  'jonathonsun',
  'yifeisun',
  'yuhaosun',
  'zilewu',
  'zhonghuayang',
  'shengaoyi',
  'hanzhizhang',
  'xueningzhang',
];

const cardTemplate = document.querySelector('#dossier-card-template').content.querySelector('.dossier-card');
const instructorCardList = document.querySelector('#dossier-cards-instructors');
const studentCardList = document.querySelector('#dossier-cards-students');

function initAllDossierCards() {
  for (const personName of instructorNames) {
    initDossierCard(personName, cardTemplate, instructorCardList);
  }

  for (const personName of studentNames) {
    initDossierCard(personName, cardTemplate, studentCardList);
  }
}

const dossierFileContainer = document.querySelector('#dossier-file-container');

function showDossierFileBasedOnHash() {
  const personName = window.location.hash;
  if (!personName) {
    closeDossierFile(dossierFileContainer);
  } else {
    showDossierFile(personName.slice(1), dossierFileContainer);
  }
}

function hideDossierFileOnEscKey(evt) {
  if (evt.key == 'Escape') {
    window.location.hash = '';
  }
}

function hideDossierFileOnClickOutside(evt) {
  if (evt.target == dossierFileContainer) {
    window.location.hash = '';
  }
}

initAllDossierCards();
window.addEventListener('hashchange', showDossierFileBasedOnHash);
showDossierFileBasedOnHash();

window.addEventListener('keydown', hideDossierFileOnEscKey);
dossierFileContainer.addEventListener('click', hideDossierFileOnClickOutside);