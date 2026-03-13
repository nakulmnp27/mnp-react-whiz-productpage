import { Injectable } from '@nestjs/common'
import { PrismaCourseOverviewRepository} from './courseOverview.repository'
import { UpsertCourseOverviewDto } from './dto/upsert-overview.dto'

@Injectable()
export class CourseOverviewService {
  constructor(private repo: PrismaCourseOverviewRepository) {}
  getPoints(courseId: bigint) {
    return this.repo.findByCourse(courseId)
  }
  upsert(courseId: bigint, dto: UpsertCourseOverviewDto) {
    return this.repo.upsert(courseId, dto)
  }
  remove(id: bigint) {
    return this.repo.delete(id)
  }
}