import {Component, OnInit} from '@angular/core';
import {SolutionsService} from '../../../../../../../../services/http/solutions/solutions.service';
import {Solution} from '../../../../../../../../dto/solutions/Solution';
import {MessagesService} from '../../../../../../../../services/messages.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-building-solutions',
  templateUrl: './building-solutions.component.html',
  styleUrls: ['./building-solutions.component.less']
})
export class BuildingSolutionsComponent implements OnInit {
  get findData(): any {
    return this.pFindData;
  }

  set findData(value: any) {
    this.pFindData = value;
  }

  private pSolutions: Array<Solution> = [];
  private pFindData = null;
  private pActiveBlock = null;

  constructor(private solutionsService: SolutionsService,
              private msgService: MessagesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.findData = null;
    this.route.queryParams.subscribe(routeData => {
      this.findData = routeData.findData;
    });
    this.solutionsService.solutions.subscribe(solutions => {
      this.solutions = solutions;
      if (this.findData) {
        let currentSolution = null;
        solutions.every(solution => {
          if (solution.id == this.findData) {
            currentSolution = solution;
            return false;
          } else {
            currentSolution = solutions[0];
            return true;
          }
        });
        this.msgService.changeCurrentSolutionMessage(currentSolution);
      } else {
        this.msgService.changeCurrentSolutionMessage(solutions[0]);
      }
    });
  }

  get solutions(): Array<Solution> {
    return this.pSolutions;
  }

  set solutions(value: Array<Solution>) {
    this.pSolutions = value;
  }

  get activeBlock(): any {
    return this.pActiveBlock;
  }

  set activeBlock(value: any) {
    this.pActiveBlock = value;
  }

  changeCurrentSolution(solution, i) {
    this.msgService.changeCurrentSolutionMessage(solution);
    this.activeBlock = i;
  }
}
