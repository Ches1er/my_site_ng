import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../../../../../services/http/contacts/contacts.service';
import {Branch} from '../../../../../../dto/Branch/Branch';
import {FormControl, FormGroup} from '@angular/forms';
import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {BranchRoles} from '../../../../../../dto/branch_roles/BranchRoles';

@Component({
  selector: 'app-admin-branches',
  templateUrl: './admin-branches.component.html',
  styleUrls: ['./admin-branches.component.less']
})
export class AdminBranchesComponent implements OnInit {
  private pBranches: Array<Branch> = [];
  private roles: Array<BranchRoles> = [];
  private pOnSubmitResponse: string;
  private pWhatHaveToDo: string;
  addChangeBranchForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    long: new FormControl(''),
    lat: new FormControl(''),
    role_id: new FormControl(''),
    role: new FormControl(''),
    active: new FormControl('')
    }
  );

  constructor(private contactsService: ContactsService,
              private adminMessageService: AdminMessagesService) {
  }

  get branches(): Array<Branch> {
    return this.pBranches;
  }

  set branches(value: Array<Branch>) {
    this.pBranches = value;
  }
  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }
  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  ngOnInit() {
    this.whatHaveToDo = 'add';
    this.updateBranches();
    this.contactsService.branchRoles.subscribe(brR => this.roles = brR);
    this.adminMessageService.newsCampaignAdded.subscribe(resp => {
      if (resp === 'update success') {
        this.onSubmitResponse = 'Данные успешно обновлены';
      }
      if (resp === 'insert success') {
        this.onSubmitResponse = 'Данные успешно добавлены';
      }
      if (resp === 'error') {
        this.onSubmitResponse = 'Ой, что-то пошло не так! Повторите попытку.';
      }
      if (resp === 'this branch exists') {
        this.onSubmitResponse = 'Филиал с таким названием уже существует. Вы можете изменить его, выбрав из списка слева.';
      }
      this.updateBranches();
    });
  }
  private updateBranches() {
    this.contactsService.branches.subscribe(branches => {
      this.branches = branches;
    });
  }

  fillInBranch(branch: Branch) {
    this.addChangeBranchForm.patchValue({
      id: branch.id,
      name: branch.name,
      address: branch.address,
      phone: branch.phone,
      long: branch.long,
      lat: branch.lat,
      role_id: branch.roleId,
      active: branch.active
    });
    this.whatHaveToDo = 'update';
  }

  onSubmit() {
    this.contactsService.addBranch(this.addChangeBranchForm.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.newsCampaignAddedMessage(resp);
    });
  }
  clearFields() {
    this.addChangeBranchForm.patchValue({id: '', name: '', address: '', phone: '', long: '', lat: '', active: ''});
    this.onSubmitResponse = null;
    this.whatHaveToDo = 'add';
  }
  clearFieldsByBtn(e) {
    e.preventDefault();
    this.clearFields();
  }
}
