import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';


// nombre d'article
interface NbrArticle{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  tabArticle: any;
  formAddArticle: FormGroup;
  public fieldArray: Array<any> = [];

  constructor(private fb: FormBuilder,private router: Router) { }
  
  onReset(){
    this.formAddArticle = this.fb.group(
      {
        article: new FormControl(''),
        prixU: new FormControl(),
        nbr: new FormControl()            
      }
    );
  }

  ngOnInit() {
    this.onReset();
  }

  // ajout des articles dans le tableau
  onAdd(){
    const ARTICLE =  {
          article: this.formAddArticle.value.article,
          prixU: this.formAddArticle.value.prixU,
          nbr: this.formAddArticle.value.nbr,
          prixT: this.formAddArticle.value.prixU*this.formAddArticle.value.nbr           
        };
      this.tabArticle=this.fieldArray.push(ARTICLE);
      console.log(this.tabArticle);
      this.onReset();
  }

  annuler(){
    this.onReset();

  }	
  
  // datas article
  onArticle() {
    this.tabArticle =this.fieldArray ;
    // console.log(this.tabArticle);
    this.localStorageAddData(this.tabArticle)
  }


  
  //set iitem article in localStorage
  localStorageAddData(data){
    localStorage.setItem('currentArticle', JSON.stringify(data));
    return this.router.navigate(['/app/echeancier']);    
  }
}
