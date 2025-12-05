import { handleApiError } from "./errorHandler";
import api from "./api";

const STORAGE_KEY_GROUPS = 'flow_groups';

// LocalStorage helpers
const getGroupsFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_GROUPS);
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize with empty array if no groups exist
    return [];
  } catch (error) {
    console.error('Error reading groups from localStorage:', error);
    return [];
  }
};

const saveGroupsToStorage = (groups) => {
  try {
    localStorage.setItem(STORAGE_KEY_GROUPS, JSON.stringify(groups));
  } catch (error) {
    console.error('Error saving groups to localStorage:', error);
    throw new Error('Failed to save groups');
  }
};

/*
Groups Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
color             TEXT

*/

export const apiGetGroups = async () => {
  // Use localStorage if API is not configured
  if (!api) {
    return getGroupsFromStorage();
  }

  try {
    const response = await api.get('/groups');
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiAddGroup = async (data) => {
  // Use localStorage if API is not configured
  if (!api) {
    const groups = getGroupsFromStorage();
    const newGroup = {
      ...data,
      id: `group_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
    };
    groups.push(newGroup);
    saveGroupsToStorage(groups);
    return newGroup;
  }

  try {
    const response = await api.post(`/groups/`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiUpdateGroup = async (groupId, data) => {
  // Use localStorage if API is not configured
  if (!api) {
    const groups = getGroupsFromStorage();
    const index = groups.findIndex(g => g.id === groupId);
    if (index === -1) {
      throw new Error('Group not found');
    }
    groups[index] = { ...groups[index], ...data };
    saveGroupsToStorage(groups);
    return groups[index];
  }

  try {
    const response = await api.put(`/groups/${groupId}`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiDeleteGroup = async (groupId) => {
  // Use localStorage if API is not configured
  if (!api) {
    const groups = getGroupsFromStorage();
    const filtered = groups.filter(g => g.id !== groupId);
    if (filtered.length === groups.length) {
      throw new Error('Group not found');
    }
    saveGroupsToStorage(filtered);
    return { success: true };
  }

  try {
    const response = await api.delete(`/groups/${groupId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}
