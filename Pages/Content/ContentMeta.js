import { metaRepo } from "../../repositories/Comments/calls";
import { getServerData } from "../../store/Context";

export const contentMeta = () => {
	getServerData("meta", metaRepo);
};

