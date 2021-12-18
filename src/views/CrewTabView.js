import data from '../constants/data.js';
import crewTabTemplate from '../templates/crew-tab-template.js';
import { getNameFromValue } from '../utils/index.js';

export default class CrewTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  initialRender() {
    this.contentContainer.innerHTML = crewTabTemplate.main;
    this.crewAddSection = document.querySelector('#crew-add-section');
    this.crewListSection = document.querySelector('#crew-list-section');
  }

  renderCrewAddSection(course) {
    this.crewAddSection.innerHTML = crewTabTemplate.addCrew(course);
  }

  renderCrewTableItem(crews) {
    this.crewTableBody.innerHTML = '';
    crews.forEach((crew, idx) => {
      this.crewTableBody.innerHTML += crewTabTemplate.tableItem(idx + 1, crew);
    });
  }

  renderCrewListSection(course, crew) {
    this.crewListSection.innerHTML = crewTabTemplate.crewList(course);
    this.crewTableBody = document.querySelector('#crew-table > tbody');
    this.renderCrewTableItem(crew);
  }

  updateOnSelectRadio(courseValue, crew) {
    const courseName = getNameFromValue(data.course, courseValue);
    this.renderCrewAddSection(courseName);
    this.renderCrewListSection(courseName, crew);
  }

  updateOnManageCrew(crew) {
    this.renderCrewTableItem(crew);
  }
}
