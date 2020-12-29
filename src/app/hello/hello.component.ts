import { Component, OnInit } from '@angular/core'; // OnInitはコンポーネントに組み込む機能

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
// クラスにOnInitの機能を組み込む
export class HelloComponent implements OnInit {
  title: string
  message: string
  now: Date

  constructor() { 
    setInterval(
      () => { this.now = new Date();}, 1000
    )
  }

  // 初期化メソッド
  ngOnInit(): void {
    this.title = 'Hello Angular App';
    this.message = 'This is Hello Component!';
  }

  today() {
    return new Date().toLocaleString();
  }
}
