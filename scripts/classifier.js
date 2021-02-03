class Classfier{

    constructor(styleSelection){
        this.styleSelection = styleSelection;
    }

    get getConfiguration(){
        return {
            style: this.identifyStyle(this.styleSelection),
            align: this.styleSelection.textAlign
        }
    }

    identifyStyle(style){
        const styles = []

        if(style.textDecoration.split(' ')[0] == 'underline'){
            styles.push('underline')
        }
        if(style.fontWeight == '700'){
            styles.push('bold')
        }
        if(style.fontStyle == 'italic'){
            styles.push('italic')
        }
        
        return styles;
    }

}