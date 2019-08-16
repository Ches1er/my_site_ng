import { Component, OnInit } from '@angular/core';
import {SolutionsService} from '../../../../../../../../services/http/solutions/solutions.service';
import {Solution} from '../../../../../../../../dto/solutions/Solution';
import {MessagesService} from '../../../../../../../../services/messages.service';

@Component({
  selector: 'app-building-solutions',
  templateUrl: './building-solutions.component.html',
  styleUrls: ['./building-solutions.component.less']
})
export class BuildingSolutionsComponent implements OnInit {
  private pSolutions: Array<Solution> = [];

  constructor(private solutionsService: SolutionsService,
              private msgService: MessagesService) { }

  ngOnInit() {
    this.solutionsService .solutions.subscribe(solutions => {
      this.solutions = solutions;
      this.msgService.changeCurrentSolutionMessage(solutions[0]);
    });
  }

  get solutions(): Array<Solution> {
    return this.pSolutions;
  }

  set solutions(value: Array<Solution>) {
    this.pSolutions = value;
  }

  changeCurrentSolution(solution, i) {
    this.msgService.changeCurrentSolutionMessage(solution);
  }
}
