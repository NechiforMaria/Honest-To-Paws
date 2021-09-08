

class HomePage{
    openHomePage(){
        browser.url('https://astage.honesttopaws.com')
    }

    get cuteCategory(){
        return $$('.c-category-mix__card')[0]
        
    }

    get funnyCategory(){
        return $$('.c-category-mix__card')[1]
    }

    get goodCategory(){
        return $$('.c-category-mix__card')[2]
    }

    get omgCategory(){
        return $$('.c-category-mix__card')[3]
    }

    get latestArticle1(){
        return $$('.c-latest__post')[0]
    }

    get latestArticle2(){
        return $$('.c-latest__post')[1]
    }

    get latestArticle3(){
        return $$('.c-latest__post')[2]
    }

    get latestArticle4(){
        return $$('.c-latest__post')[3]
    }
    
    get editorsPicks1(){
        return $$('.c-editors-picks__post')[0]
    }

    get editorsPicks2(){
        return $$('.c-editors-picks__post')[1]
    }

    get editorsPicks3(){
        return $$('.c-editors-picks__post')[2]
    }

    get cutearticle1(){
        return $$('.c-link__cover')[0]
    }

    get cutearticle2(){
        return $$('.c-category__post')[1]
    }

    get cutearticle3(){
        return $$('.c-category__post')[2]
    }

    get cutearticle4(){
        return $$('.c-category__post')[3]
    } 

    get seeMoreCuteButton(){
        return $$('.c-widget-image-header .c-link__more-cat-hc')[0]
    }

    get fuunyarticle1(){
        return $$('.c-link__cover')[1]
    }

    get fuunyarticle2(){
        return $$('.c-category__post')[5]
    }

    get fuunyarticle3(){
        return $$('.c-category__post')[6]
    }

    get fuunyarticle4(){
        return $$('.c-category__post')[7]
    }

    get seeMoreFuunyButton(){
        return $$('.c-widget-image-header .c-link__more-cat-hc')[1]
    }

    get goodarticle1(){
        return $$('.c-link__cover')[2]
    }

    get goodarticle2(){
        return $$('.c-category__post')[9]
    }

    get goodarticle3(){
        return $$('.c-category__post')[10]
    }

    get goodarticle4(){
        return $$('.c-category__post')[11]
    }

    get seeMoreGoodeButton(){
        return $$('.c-widget-image-header .c-link__more-cat-hc')[2]
    }

    get omgarticle1(){
        return $$('.c-link__cover')[3]
    }

    get omgarticle2(){
        return $$('.c-category__post')[13]
    }

    get omgarticle3(){
        return $$('.c-category__post')[14]
    }

    get omgarticle4(){
        return $$('.c-category__post')[15]
    }

    get seeMoreOmgButton(){
        return $$('.c-widget-image-header .c-link__more-cat-hc')[3]
    }

    get aboutFooterButton(){
        return $$('.qa-page-footer__link')[0]
    }

    get privacyPolicyFooterButton(){
        return $$('.qa-page-footer__link')[1]
    }

    get dmcaFooterButton(){
        return $$('.qa-page-footer__link')[2]
    }

    get advertisingFooterButton(){
        return $$('.qa-page-footer__link')[3]
    }

    get titleArticle(){
        return $('.qa-placement--content')
    }

    get footerContainer(){
        return $('.qa-page-footer__container')
    }

}

export default new HomePage()