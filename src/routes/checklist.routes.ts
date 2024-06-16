import { Router } from 'express';
import * as checklistController from '../controllers/checklist.controller';
import { validateChecklist, validateChecklistId } from '../validations/checklist.validation';

const checklistRouter = () => {
  const router = Router();

  router.get('/checklists', checklistController.getAllChecklists);

  router.get('/checklists/:id', checklistController.getChecklistById);

  router.post('/checklists', validateChecklist, checklistController.createChecklist);

  router.put('/checklists/:id', validateChecklistId, checklistController.updateChecklist);

  router.delete('/checklists/:id', validateChecklistId, checklistController.deleteChecklist);

  return router;
};

export default checklistRouter;
