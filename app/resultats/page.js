"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import animauxData from "../../data/animaux.json";
import qualificatifsData from "../../data/qualificatifs.json";

const CLE_RESULTAT = "observatoire-resultat";
const CLE_QUALIFICATIF = "observatoire-qualificatif";

function trouverAnimal(indiceStupidite) {
  return animauxData.animaux.find(
    (animal) =>
      indiceStupidite >= animal.score_min &&
      indiceStupidite <= animal.score_max
  );
}

function trouverQualificatif(mesure, valeur) {
  const mesureData = qualificatifsData.mesures.find(
    (element) => element.mesure === mesure
  );

  if (!mesureData) {
    return null;
  }

  const qualificatifBas = mesureData.qualificatifs.find(
    (qualificatif) => qualificatif.id.endsWith("-bas")
  );

  const qualificatifMoyen = mesureData.qualificatifs.find(
    (qualificatif) => qualificatif.id.endsWith("-moyen")
  );

  const qualificatifHaut = mesureData.qualificatifs.find(
    (qualificatif) => qualificatif.id.endsWith("-haut")
  );

  if (mesure === "temps_avant_reponse") {
    if (valeur <= 3) return qualificatifBas;
    if (valeur <= 8) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "changements_reponse") {
    if (valeur <= 1) return qualificatifBas;
    if (valeur <= 3) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "retours_arriere") {
    if (valeur <= 1) return qualificatifBas;
    if (valeur <= 3) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "clics_secondaires") {
    if (valeur <= 5) return qualificatifBas;
    if (valeur <= 15) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "utilisation_aide") {
    if (valeur <= 1) return qualificatifBas;
    if (valeur <= 3) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "completude") {
    if (valeur <= 59) return qualificatifBas;
    if (valeur <= 89) return qualificatifMoyen;
    return qualificatifHaut;
  }

  return null;
}

function creerSignatureResultat(resultat) {
  return JSON.stringify({
    scoreTotal: resultat.scoreTotal,
    scoreMaximum: resultat.scoreMaximum,
    indiceStupidite: resultat.indiceStupidite,
    tauxCompletude: resultat.tauxCompletude,
    tempsMoyenSecondes: resultat.tempsMoyenSecondes,
    nombreReponsesModifiees: resultat.nombreReponsesModifiees,
    nombreClics: resultat.nombreClics,
    nombreClicsPrecedents: resultat.nombreClicsPrecedents,
    nombreClicsAide: resultat.nombreClicsAide,
  });
}

function obtenirQualificatif(resultat) {
  const signatureResultat = creerSignatureResultat(resultat);
  const qualificatifEnregistre = sessionStorage.getItem(
    CLE_QUALIFICATIF
  );

  if (qualificatifEnregistre) {
    try {
      const donneesEnregistrees = JSON.parse(
        qualificatifEnregistre
      );

      if (
        donneesEnregistrees.signature === signatureResultat &&
        donneesEnregistrees.qualificatif
      ) {
        return donneesEnregistrees.qualificatif;
      }
    } catch (erreur) {
      console.error(
        "Impossible de lire le qualificatif enregistré.",
        erreur
      );
    }
  }

  const mesuresDisponibles = [
    {
      mesure: "completude",
      valeur: resultat.tauxCompletude ?? 0,
    },
    {
      mesure: "temps_avant_reponse",
      valeur: resultat.tempsMoyenSecondes ?? 0,
    },
    {
      mesure: "changements_reponse",
      valeur: resultat.nombreReponsesModifiees ?? 0,
    },
    {
      mesure: "clics_secondaires",
      valeur: Math.max(0, (resultat.nombreClics ??
