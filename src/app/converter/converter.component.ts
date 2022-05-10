import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {
    
    output: string = "Here's the converted text";

    constructor() { }

    ngOnInit(): void {
    }

    convertText(input_value: any): void {
        if (input_value.target.value.length > 0) {
            this.output = "let g:dashboard_custom_header=[\n";
            this.output += "\\'',\n";
            for (let i = 0; i < input_value.target.value.split("\n").length; i++) {
                this.output += "\\'" + input_value.target.value.split("\n")[i] + "',\n";
            };
            this.output += "\\'',\n";
            this.output += "\\]";
        }
        else {
            this.output = "Here's the converted text";
        }
    }

}
