import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class UniqueEmailValidator implements ValidatorConstraintInterface{

    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(
        value: any, 
        validationArguments?: ValidationArguments
        ): Promise<boolean> {
        const usuarioExiste = await this.usuarioRepository.existeComEmail(value);
        return !usuarioExiste;
    }

}

export const UniqueEmail = (optionsValidation: ValidationOptions) => {
    return (objeto: Object, propriedade: string) =>{
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: optionsValidation,
            constraints: [],
            validator: UniqueEmailValidator
        })
    }
}