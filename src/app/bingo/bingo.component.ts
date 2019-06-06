import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { nsend } from 'q';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css'],
  providers: [ConfirmationService]
})
export class BingoComponent implements OnInit {
  public bingo = []
  public last
  public numbers:number[]
  public msgs = []

  constructor(private bingoService:BingoService, private confirmationService:ConfirmationService) { }

  ngOnInit() {
    this.numbers = this.bingoService.getNumbers()
  }

  public sort() {
    this.bingoService.sort().subscribe(
      response => {
       this.bingo = response.numbers
       this.last = response.number
      } 
     )
  }

  public clear() {
    this.confirmationService.confirm({
        message: 'Deseja Zerar o Jogo Atual?',
        accept: () => {
          this.bingoService.clear().subscribe(
          response => {
            this.msgs = [];
            console.log(response.message)
            this.last = null
            this.bingo = []

            this.msgs.push({severity:'success', summary:'Bingo', detail:response.message});

            setTimeout(() => this.msgs = [], 1000)
          }
        )
      }
    })
  }
}
