import {
  FilterExcludingWhere,
  repository,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PkgParkingSettings} from '../models';
import {PkgParkingSettingsRepository} from '../repositories';

export class ParkingSettingsController {
  constructor(
    @repository(PkgParkingSettingsRepository)
    public pkgParkingSettingsRepository : PkgParkingSettingsRepository,
  ) {}

  @post('/parking-settings')
  @response(200, {
    description: 'PkgParkingSettings model instance',
    content: {'application/json': {schema: getModelSchemaRef(PkgParkingSettings)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingSettings, {
            title: 'NewPkgParkingSettings',
            exclude: ['sysUpdatedAtDttm','sysCreatedAtDttm'],
            
          }),
        },
      },
    })
    pkgParkingSettings: PkgParkingSettings,
  ): Promise<PkgParkingSettings> {
    pkgParkingSettings.sysCreatedAtDttm = Date(), 
    pkgParkingSettings.sysUpdatedAtDttm = Date()
    return this.pkgParkingSettingsRepository.create(pkgParkingSettings);
  }


  @get('/parking-settings/{id}')
  @response(200, {
    description: 'PkgParkingSettings model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PkgParkingSettings, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PkgParkingSettings, {exclude: 'where'}) filter?: FilterExcludingWhere<PkgParkingSettings>
  ): Promise<PkgParkingSettings> {
    return this.pkgParkingSettingsRepository.findById(id, filter);
  }

  @patch('/parking-settings/{id}')
  @response(204, {
    description: 'PkgParkingSettings PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PkgParkingSettings, {partial: true}),
        },
      },
    })
    pkgParkingSettings: PkgParkingSettings,
  ): Promise<void> {
    await this.pkgParkingSettingsRepository.updateById(id, pkgParkingSettings);
  }

  @del('/parking-settings/{id}')
  @response(204, {
    description: 'PkgParkingSettings DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pkgParkingSettingsRepository.deleteById(id);
  }
}
