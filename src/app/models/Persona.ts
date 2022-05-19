import { Curso } from './Curso';
import { EduFormal } from './EduFormal';
import { ExpLaboral } from './ExpLaboral';
import { Habilidad } from './Habilidad';
import { Informacion } from './Informacion';
import { Proyecto } from './Proyecto';

export interface Persona {
  id: number;
  cursos: Curso[];
  eduFormal: EduFormal[];
  expLaboral: ExpLaboral[];
  habilidades: Habilidad[];
  informacion: Informacion;
  proyectos: Proyecto[];
}
