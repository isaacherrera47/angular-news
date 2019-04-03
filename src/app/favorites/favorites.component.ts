import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  private articles: any;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    const val = localStorage.getItem('items');
    if (val !== null) {
      this.articles = JSON.parse(val);
    }
  }

  onUnfavorite(article) {
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.articles));
    const snackBarRef = this.snackBar.open('You deleted an article from your favorites', 'Ok', {
      duration: 3000
    });
  }
}
