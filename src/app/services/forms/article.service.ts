import { Injectable } from '@angular/core';
import { FormBuilder,  Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  tabArticle: any;
  public fieldArray: Array<any> = [];
  
  constructor(private fb: FormBuilder) {}

  form = this.fb.group(
    {  
    $key: null,
    article: new FormControl('', Validators.required),
    prixU: new FormControl('', Validators.required),
    nbr: new FormControl('', Validators.required)
  });



  onAddArticle(){
    const ARTICLE =  {
          article: this.form.value.article,
          prixU: this.form.value.prixU,
          nbr: this.form.value.nbr,
          prixT: this.form.value.prixU*this.form.value.nbr           
        };
        // console.log(ARTICLE);
    this.fieldArray.push(ARTICLE);
    this.onReset();
  }
	
  // datas article
  getArticle() {
    this.tabArticle =this.fieldArray ;
    // console.log(this.tabArticle);
    return this.tabArticle
  }

  onReset(){
    this.form = this.fb.group(
      {
        $key: null,
        article: '',
        prixU: '' ,  
        nbr: '' ,     
      }
    );
  }

}
