import { EntityRepository, Repository } from '@jonasbpa/typeorm';
import { Photo } from './photo.entity';

@EntityRepository(Photo)
export class CustomPhotoRepository extends Repository<Photo> {}
