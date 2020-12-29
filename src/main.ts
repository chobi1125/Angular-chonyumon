// Angularで用意されているライブラリ
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 以下はソースコードを読み込んでいるだけ
import { AppModule } from './app/app.module'; 
import { environment } from './environments/environment';

// 正規リリースモードの設定
if (environment.production) {
  enableProdMode();
}

// Angularプラットフォームと呼ばれるオブジェクトを取り出す
// AppModuleをプログラム起動時に実行するように設定してる
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
